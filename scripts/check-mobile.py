"""Responsive smoke check against a running Hugo server.

Requires Python Playwright and Chromium. Run:
    hugo server --bind 127.0.0.1 --port 1313
    python scripts/check-mobile.py http://127.0.0.1:1313
"""
import sys
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:1313').rstrip('/')
ROUTES = [
    '/', '/background/', '/about/', '/research/', '/blog/', '/blog/conferences/',
    '/webinars/', '/scratchpad/', '/tags/', '/tags/transportation-planning/',
    '/scratchpad/llm/', '/scratchpad/llm/llm-105/',
    '/scratchpad/human-behavior-modeling/hbm-03/',
    '/scratchpad/human-behavior-modeling/hbm-05/',
    '/scratchpad/human-behavior-modeling/hbm-08/',
    '/research/ev-charging-network-hurricane-ian/',
    '/research/robust-mobile-ev-charging-natural-disasters/',
    '/research/open-data-traffic-bottlenecks/',
]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    page = browser.new_page(viewport={'width': 390, 'height': 844}, has_touch=True, color_scheme='light')
    for width in [320, 390, 768, 820, 900, 1024, 1440]:
        page.set_viewport_size({'width': width, 'height': 844})
        for route in ROUTES:
            response = page.goto(BASE + route, wait_until='domcontentloaded')
            assert response.ok, (route, response.status)
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'), (width, route)
            # A clipped card can pass the page-width check; check its actual text too.
            assert page.locator('.blog-card-content, .card-list-item').evaluate_all('''cards => cards.every(card => {
                const box = card.getBoundingClientRect();
                return [...card.querySelectorAll('h2, .blog-date, .card-list-tag, .card-list-journal')].every(el => {
                    const r = el.getBoundingClientRect();
                    return r.left >= box.left && r.right <= box.right + 1 && r.bottom <= box.bottom + 1;
                });
            })'''), (width, route, 'clipped card text')
        page.goto(BASE + '/', wait_until='domcontentloaded')
        button = page.locator('#hamburger-menu-toggle-target')
        if width <= 1024:
            button.tap()
            assert button.get_attribute('aria-expanded') == 'true'
            menu = page.locator('#mobile-navigation')
            assert menu.is_visible()
            assert menu.locator('a').count() >= 7
            page.keyboard.press('Escape')
            assert button.get_attribute('aria-expanded') == 'false'
            assert not menu.is_visible()
            button.focus()
            page.keyboard.press('Enter')
            assert menu.is_visible()
        else:
            assert not button.is_visible()
            assert page.locator('.nav-links > .nav-link').first.is_visible()
        print(f'Passed {width}px', flush=True)

    page.set_viewport_size({'width': 667, 'height': 320})
    page.goto(BASE + '/')
    page.locator('#hamburger-menu-toggle-target').tap()
    menu = page.locator('#mobile-navigation')
    assert menu.evaluate('el => el.getBoundingClientRect().bottom <= innerHeight + 1')
    assert menu.evaluate('el => el.scrollHeight > el.clientHeight')
    menu.locator('a').last.scroll_into_view_if_needed()
    assert menu.evaluate('el => el.scrollTop > 0')

    page.set_viewport_size({'width': 390, 'height': 844})
    page.goto(BASE + '/scratchpad/human-behavior-modeling/hbm-08/')
    page.locator('.ttm-step[data-stage="5"]').tap()
    assert page.locator('#ttm-title').inner_text() == '5. Maintenance'

    page.goto(BASE + '/research/ev-charging-network-hurricane-ian/')
    diagram = page.locator('.research-diagram-scroll')
    assert diagram.evaluate('el => el.scrollWidth > el.clientWidth')
    diagram.evaluate('el => el.scrollLeft = el.scrollWidth')
    assert diagram.evaluate('el => el.scrollLeft > 0')
    page.locator('.ev-grid-container').focus()
    assert 'Hurricane Strike' in page.locator('.ev-state').evaluate('el => getComputedStyle(el, "::after").content')

    page.goto(BASE + '/background/')
    page.locator('#cv-tab-research').tap()
    assert page.locator('#cv-panel-research').is_visible()
    page.locator('#hamburger-menu-toggle-target').tap()
    page.locator('#mobile-navigation .dark-theme-toggle').tap()
    assert not page.locator('#dark-theme').evaluate('el => el.disabled')
    page.reload()
    assert not page.locator('#dark-theme').evaluate('el => el.disabled')
    browser.close()
    print('Passed mobile interactions and theme persistence')
