/**
 * LLM Interactive Diagrams Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Generic Node Click -> Panel Update Logic
    const diagramContainers = document.querySelectorAll('.llm-diagram-container');

    diagramContainers.forEach(container => {
        const nodes = container.querySelectorAll('.llm-node[data-target]');
        const panels = container.querySelectorAll('.llm-panel-content');
        const detailPanel = container.querySelector('.llm-detail-panel');

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                // Remove active class from all nodes in this container
                nodes.forEach(n => n.classList.remove('active'));
                
                // Hide all panels
                panels.forEach(p => p.style.display = 'none');

                // Activate clicked node
                node.classList.add('active');

                // Show target panel
                const targetId = node.getAttribute('data-target');
                const targetPanel = container.querySelector(`#${targetId}`);
                
                if (targetPanel && detailPanel) {
                    targetPanel.style.display = 'block';
                    detailPanel.classList.add('active');
                    // Retrigger animation
                    detailPanel.style.animation = 'none';
                    detailPanel.offsetHeight; /* trigger reflow */
                    detailPanel.style.animation = null;
                }
            });
        });
    });

    // Post 204: Highlight Differences Toggle
    const btn204 = document.getElementById('btn-204-highlight');
    if (btn204) {
        btn204.addEventListener('click', () => {
            const nodes = document.querySelectorAll('#diagram-204 .llm-node');
            nodes.forEach(node => {
                node.classList.toggle('llm-animating');
            });
            if (btn204.textContent.includes('Highlight')) {
                btn204.textContent = 'Reset Highlight';
            } else {
                btn204.textContent = 'Highlight Differences';
            }
        });
    }

    // Post 205: Route Toggle (Local vs OpenRouter)
    const toggle205 = document.getElementById('btn-205-toggle');
    if (toggle205) {
        let isHosted = false;
        toggle205.addEventListener('click', () => {
            isHosted = !isHosted;
            document.querySelectorAll('.route-local').forEach(el => el.style.opacity = isHosted ? '0.2' : '1');
            document.querySelectorAll('.route-hosted').forEach(el => el.style.opacity = isHosted ? '1' : '0.2');
            toggle205.textContent = isHosted ? 'Switch to Local Route' : 'Switch to Hosted Route';
            
            // Show corresponding panel
            document.querySelectorAll('#diagram-205 .llm-panel-content').forEach(p => p.style.display = 'none');
            document.getElementById(isHosted ? 'panel-205-hosted' : 'panel-205-local').style.display = 'block';
            document.getElementById('detail-205').classList.add('active');
        });
    }

    // Post 206: Agent Loop Player
    const play206 = document.getElementById('btn-206-play');
    if (play206) {
        const loopNodes = ['node-206-observe', 'node-206-decide', 'node-206-act', 'node-206-verify'];
        let interval;
        let currentIndex = 0;
        let isPlaying = false;

        play206.addEventListener('click', () => {
            if (isPlaying) {
                clearInterval(interval);
                play206.textContent = 'Play Agent Loop';
                isPlaying = false;
                loopNodes.forEach(id => document.getElementById(id).classList.remove('llm-animating'));
            } else {
                play206.textContent = 'Stop Loop';
                isPlaying = true;
                
                interval = setInterval(() => {
                    loopNodes.forEach(id => document.getElementById(id).classList.remove('llm-animating'));
                    document.getElementById(loopNodes[currentIndex]).classList.add('llm-animating');
                    
                    // Show panel
                    document.querySelectorAll('#diagram-206 .llm-panel-content').forEach(p => p.style.display = 'none');
                    document.getElementById(`panel-${loopNodes[currentIndex]}`).style.display = 'block';
                    document.getElementById('detail-206').classList.add('active');

                    currentIndex = (currentIndex + 1) % loopNodes.length;
                }, 1500);
            }
        });
    }
});
