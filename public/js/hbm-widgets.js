// hbm-widgets.js
// Custom HTML Web Components for the Human Behavior Modeling series
// All widgets inherit global page styles but use inline styles for specifics.

// -------------------------------------------------------------------------
// 1. hbm-01: Clickable Roadmap
// -------------------------------------------------------------------------
class HBMRoadmapWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid var(--hbm-accent, #D97706); border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: var(--hbm-bg-light, #FFFBEB); font-family: sans-serif;">
                <h3 style="margin-top: 0; color: var(--hbm-accent, #D97706); text-align: center;">Interactive HBM Roadmap</h3>
                <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 1rem;">
                    <div style="flex: 1; min-width: 250px;">
                        <ul style="list-style: none; padding: 0; margin: 0; cursor: pointer; display: flex; flex-direction: column; gap: 0.5rem;" id="hbm-roadmap-list">
                            <li data-layer="1" style="padding: 0.75rem; background: #FDE68A; border-radius: 6px; font-weight: bold; border-left: 4px solid #D97706; transition: all 0.2s;">Part 1: Foundations</li>
                            <li data-layer="2" style="padding: 0.75rem; background: #FEF3C7; border-radius: 6px; border-left: 4px solid transparent; transition: all 0.2s;">Part 2: Risk & Safety</li>
                            <li data-layer="3" style="padding: 0.75rem; background: #FEF3C7; border-radius: 6px; border-left: 4px solid transparent; transition: all 0.2s;">Part 3: Motivation & Norms</li>
                            <li data-layer="4" style="padding: 0.75rem; background: #FEF3C7; border-radius: 6px; border-left: 4px solid transparent; transition: all 0.2s;">Part 4: Choice Models</li>
                            <li data-layer="5" style="padding: 0.75rem; background: #FEF3C7; border-radius: 6px; border-left: 4px solid transparent; transition: all 0.2s;">Part 5: Intervention Design</li>
                            <li data-layer="6" style="padding: 0.75rem; background: #FEF3C7; border-radius: 6px; border-left: 4px solid transparent; transition: all 0.2s;">Part 6: Computational Modeling</li>
                        </ul>
                    </div>
                    <div style="flex: 1.5; min-width: 300px; padding: 1.5rem; background: #fff; border-radius: 8px; border: 1px solid #FCD34D; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" id="hbm-roadmap-content">
                        <h4 style="margin-top:0; color:#B45309;">Part 1: Foundations</h4>
                        <p><strong>Key Focus:</strong> Basic cognitive frameworks like Knowledge-Attitude-Practice (KAP) and the Theory of Planned Behavior (TPB).</p>
                        <p><strong>Key Question:</strong> Why doesn't simply knowing facts change our behavior?</p>
                        <p><strong>Transit Context:</strong> Telling people that buses reduce emissions (knowledge) rarely gets them out of their cars (action). We explore intention vs. actual action.</p>
                    </div>
                </div>
            </div>
        `;
        
        const data = {
            1: { title: "Part 1: Foundations", focus: "Basic cognitive frameworks like Knowledge-Attitude-Practice (KAP) and the Theory of Planned Behavior (TPB).", question: "Why doesn't simply knowing facts change our behavior?", context: "Telling people that buses reduce emissions (knowledge) rarely gets them out of their cars (action). We explore intention vs. actual action." },
            2: { title: "Part 2: Risk & Safety", focus: "Theories addressing threat perception: Health Belief Model, Protection Motivation Theory.", question: "How do we react to threats and calculate risks?", context: "Is it safe to bike to work? How do perceptions of crashes or COVID-19 risk shift our mode choices?" },
            3: { title: "Part 3: Motivation & Norms", focus: "Social drivers and internal drives: Self-Determination Theory, Diffusion of Innovations, Social Practice.", question: "How do peers, identity, and values drive us?", context: "If all my colleagues drive, driving becomes a social norm. How do we break it?" },
            4: { title: "Part 4: Choice Models", focus: "Decision-making mathematics and bounds on rationality: Discrete Choice, Prospect Theory, Habit.", question: "How do we weigh our options when making a choice?", context: "Trading off 10 minutes of walking vs. $5 of parking fees—and why we aren't perfectly rational about it." },
            5: { title: "Part 5: Intervention Design", focus: "Action-oriented models for practitioners: COM-B, Behaviour Change Wheel, Nudges.", question: "How do we engineer a behavior change?", context: "Designing a 'nudge' or policy that removes barriers and actually gets people on the train." },
            6: { title: "Part 6: Computational Modeling", focus: "Simulation techniques: Agent-Based Modeling, System Dynamics, Machine Learning.", question: "How do 10,000 individual choices create a city-wide pattern?", context: "Simulating crowds, traffic jams, and transit death spirals using computer algorithms." }
        };

        const list = this.querySelector('#hbm-roadmap-list');
        const content = this.querySelector('#hbm-roadmap-content');
        
        list.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if(!li) return;
            const layer = li.getAttribute('data-layer');
            
            // Reset styles
            list.querySelectorAll('li').forEach(item => {
                item.style.background = '#FEF3C7';
                item.style.fontWeight = 'normal';
                item.style.borderLeftColor = 'transparent';
            });
            // Set active
            li.style.background = '#FDE68A';
            li.style.fontWeight = 'bold';
            li.style.borderLeftColor = '#D97706';
            
            // Update content
            content.innerHTML = `
                <h4 style="margin-top:0; color:#B45309;">${data[layer].title}</h4>
                <p><strong>Key Focus:</strong> ${data[layer].focus}</p>
                <p><strong>Key Question:</strong> ${data[layer].question}</p>
                <p><strong>Transit Context:</strong> ${data[layer].context}</p>
            `;
        });
    }
}
customElements.define('hbm-roadmap-widget', HBMRoadmapWidget);

// -------------------------------------------------------------------------
// 2. hbm-02: Knowledge-Action Gap Slider
// -------------------------------------------------------------------------
class HBMKnowledgeActionWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">The Knowledge-Action Gap Simulator</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Adjust the sliders to see how knowledge and context affect actual behavior.</p>
                
                <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin: 0 auto;">
                    <div>
                        <label style="display: flex; justify-content: space-between; font-weight: bold;">
                            <span>Campaign Intensity (Information)</span>
                            <span id="gap-val-info">50%</span>
                        </label>
                        <input type="range" id="gap-slide-info" min="0" max="100" value="50" style="width: 100%; accent-color: #D97706;">
                    </div>
                    <div>
                        <label style="display: flex; justify-content: space-between; font-weight: bold;">
                            <span>Contextual Support (Infrastructure)</span>
                            <span id="gap-val-ctx">20%</span>
                        </label>
                        <input type="range" id="gap-slide-ctx" min="0" max="100" value="20" style="width: 100%; accent-color: #059669;">
                    </div>
                    <div>
                        <label style="display: flex; justify-content: space-between; font-weight: bold;">
                            <span>Old Habits (Friction)</span>
                            <span id="gap-val-habit">80%</span>
                        </label>
                        <input type="range" id="gap-slide-habit" min="0" max="100" value="80" style="width: 100%; accent-color: #DC2626;">
                    </div>
                    
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #fff; border: 1px solid #ccc; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                            <strong>Resulting Knowledge:</strong>
                            <div style="width: 60%; background: #eee; height: 20px; border-radius: 10px; overflow: hidden;">
                                <div id="gap-bar-know" style="width: 50%; height: 100%; background: #3B82F6; transition: width 0.3s;"></div>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong>Actual Action:</strong>
                            <div style="width: 60%; background: #eee; height: 20px; border-radius: 10px; overflow: hidden;">
                                <div id="gap-bar-act" style="width: 15%; height: 100%; background: #10B981; transition: width 0.3s;"></div>
                            </div>
                        </div>
                        <p id="gap-commentary" style="margin-top: 1rem; font-size: 0.9rem; font-style: italic; color: #666; text-align: center;">Knowledge is moderate, but action is suppressed by strong habits and poor infrastructure.</p>
                    </div>
                </div>
            </div>
        `;

        const sInfo = this.querySelector('#gap-slide-info');
        const sCtx = this.querySelector('#gap-slide-ctx');
        const sHabit = this.querySelector('#gap-slide-habit');
        
        const vInfo = this.querySelector('#gap-val-info');
        const vCtx = this.querySelector('#gap-val-ctx');
        const vHabit = this.querySelector('#gap-val-habit');
        
        const bKnow = this.querySelector('#gap-bar-know');
        const bAct = this.querySelector('#gap-bar-act');
        const commentary = this.querySelector('#gap-commentary');

        const update = () => {
            const info = parseInt(sInfo.value);
            const ctx = parseInt(sCtx.value);
            const habit = parseInt(sHabit.value);
            
            vInfo.textContent = info + '%';
            vCtx.textContent = ctx + '%';
            vHabit.textContent = habit + '%';
            
            // Knowledge is mostly driven by info
            const know = info;
            bKnow.style.width = know + '%';
            
            // Action is driven by knowledge, multiplied by context, minus habit friction
            // Normalizing formula for illustration
            let act = (know * 0.4) + (ctx * 0.6) - (habit * 0.4);
            if(act < 0) act = 0;
            if(act > 100) act = 100;
            
            bAct.style.width = act + '%';
            
            if (act < 20) {
                if (know > 70) commentary.textContent = "High knowledge, but the gap is huge! Bad infrastructure and strong old habits are blocking action.";
                else commentary.textContent = "Low knowledge and high friction mean no behavior change.";
            } else if (act < 60) {
                commentary.textContent = "Some action occurring, but improvements in context or breaking habits would help significantly.";
            } else {
                commentary.textContent = "Excellent! High support and low friction allow knowledge to translate directly into action.";
            }
        };

        sInfo.addEventListener('input', update);
        sCtx.addEventListener('input', update);
        sHabit.addEventListener('input', update);
        update();
    }
}
customElements.define('hbm-knowledge-action-widget', HBMKnowledgeActionWidget);


// -------------------------------------------------------------------------
// 3. hbm-03: KAP Survey Simulator
// -------------------------------------------------------------------------
class HBMKAPSurveyWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Mini KAP Survey: Transit Commuting</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Answer these 3 questions to see how the KAP framework scores you.</p>
                
                <div style="background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc; max-width: 500px; margin: 0 auto;">
                    <div style="margin-bottom: 1rem;">
                        <strong>1. Knowledge:</strong> Do you know that public transit reduces carbon emissions compared to driving?
                        <div style="margin-top: 0.5rem; display: flex; gap: 1rem;">
                            <label><input type="radio" name="kap-k" value="1"> Yes</label>
                            <label><input type="radio" name="kap-k" value="0"> No</label>
                        </div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <strong>2. Attitude:</strong> Do you believe reducing your personal carbon footprint is important?
                        <div style="margin-top: 0.5rem; display: flex; gap: 1rem;">
                            <label><input type="radio" name="kap-a" value="1"> Yes</label>
                            <label><input type="radio" name="kap-a" value="0"> No</label>
                        </div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <strong>3. Practice:</strong> Do you take public transit to work at least 3 days a week?
                        <div style="margin-top: 0.5rem; display: flex; gap: 1rem;">
                            <label><input type="radio" name="kap-p" value="1"> Yes</label>
                            <label><input type="radio" name="kap-p" value="0"> No</label>
                        </div>
                    </div>
                    
                    <div id="kap-results" style="display: none; padding: 1rem; background: #FDE68A; border-radius: 8px; margin-top: 1rem;">
                        <h4 style="margin-top: 0; color: #92400E;">Analysis Result</h4>
                        <p id="kap-analysis"></p>
                    </div>
                </div>
            </div>
        `;
        
        const inputs = this.querySelectorAll('input[type="radio"]');
        const results = this.querySelector('#kap-results');
        const analysis = this.querySelector('#kap-analysis');
        
        const evaluate = () => {
            const k = this.querySelector('input[name="kap-k"]:checked');
            const a = this.querySelector('input[name="kap-a"]:checked');
            const p = this.querySelector('input[name="kap-p"]:checked');
            
            if(k && a && p) {
                const kv = parseInt(k.value);
                const av = parseInt(a.value);
                const pv = parseInt(p.value);
                
                results.style.display = 'block';
                
                if(kv === 1 && av === 1 && pv === 1) {
                    analysis.innerHTML = "<strong>Aligned!</strong> You have the knowledge, hold a positive attitude, and execute the practice. The KAP linear model works perfectly here.";
                } else if(kv === 1 && av === 1 && pv === 0) {
                    analysis.innerHTML = "<strong>Knowledge-Action Gap!</strong> You know the facts and care about the issue, but don't do the practice. This exposes the flaw in KAP: other barriers (like time, cost, or convenience) are stopping you.";
                } else if(kv === 0 && pv === 1) {
                    analysis.innerHTML = "<strong>Habitual / Coincidental Practice.</strong> You do the behavior but lack the specific knowledge or attitude. Perhaps transit is just cheaper or faster for you!";
                } else {
                    analysis.innerHTML = "<strong>Consistent Non-Adopter.</strong> Your lack of practice aligns with a lack of knowledge or a negative attitude. An information campaign might actually help here.";
                }
            }
        };
        
        inputs.forEach(input => input.addEventListener('change', evaluate));
    }
}
customElements.define('hbm-kap-survey-widget', HBMKAPSurveyWidget);


// -------------------------------------------------------------------------
// 4. hbm-04: TPB Causal Path Diagram
// -------------------------------------------------------------------------
class HBMTPBWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Theory of Planned Behavior Simulator</h3>
                <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
                    <!-- Controls -->
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; font-weight: bold; margin-bottom: 0.25rem;">Attitude</label>
                            <input type="range" id="tpb-att" min="0" max="100" value="70" style="width: 100%; accent-color: #3B82F6;">
                            <small style="color: #666;">"I think taking the train is good."</small>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; font-weight: bold; margin-bottom: 0.25rem;">Subjective Norms</label>
                            <input type="range" id="tpb-norm" min="0" max="100" value="50" style="width: 100%; accent-color: #8B5CF6;">
                            <small style="color: #666;">"My friends and family take the train."</small>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; font-weight: bold; margin-bottom: 0.25rem;">Perceived Behavioral Control (PBC)</label>
                            <input type="range" id="tpb-pbc" min="0" max="100" value="30" style="width: 100%; accent-color: #10B981;">
                            <small style="color: #666;">"It's easy for me to take the train."</small>
                        </div>
                    </div>
                    
                    <!-- Diagram -->
                    <div style="flex: 1; min-width: 300px; position: relative; height: 250px; background: #fff; border-radius: 8px; border: 1px solid #ccc; padding: 1rem;">
                        <svg width="100%" height="100%" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
                            <!-- Paths -->
                            <line x1="100" y1="40" x2="200" y2="100" stroke="#3B82F6" id="path-att" stroke-width="2" />
                            <line x1="100" y1="100" x2="200" y2="100" stroke="#8B5CF6" id="path-norm" stroke-width="2" />
                            <line x1="100" y1="160" x2="200" y2="100" stroke="#10B981" id="path-pbc" stroke-width="2" />
                            <line x1="100" y1="160" x2="280" y2="160" stroke="#10B981" id="path-pbc-beh" stroke-width="2" stroke-dasharray="4" />
                            <line x1="200" y1="100" x2="280" y2="160" stroke="#D97706" id="path-int-beh" stroke-width="4" />
                            
                            <!-- Nodes -->
                            <rect x="10" y="25" width="90" height="30" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
                            <text x="55" y="45" font-size="12" text-anchor="middle" fill="#1E3A8A">Attitude</text>
                            
                            <rect x="10" y="85" width="90" height="30" rx="4" fill="#EDE9FE" stroke="#8B5CF6" />
                            <text x="55" y="105" font-size="12" text-anchor="middle" fill="#4C1D95">Subj. Norm</text>
                            
                            <rect x="10" y="145" width="90" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" />
                            <text x="55" y="165" font-size="12" text-anchor="middle" fill="#065F46">PBC</text>
                            
                            <rect x="170" y="85" width="60" height="30" rx="4" fill="#FEF3C7" stroke="#D97706" />
                            <text x="200" y="105" font-size="12" text-anchor="middle" fill="#92400E">Intention</text>
                            
                            <rect x="250" y="145" width="50" height="30" rx="4" fill="#FEE2E2" stroke="#DC2626" />
                            <text x="275" y="165" font-size="12" text-anchor="middle" fill="#991B1B">Action</text>
                        </svg>
                        
                        <div id="tpb-output" style="position: absolute; bottom: 10px; right: 10px; background: rgba(255,255,255,0.9); padding: 5px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; border: 1px solid #ccc;">
                            Intention: 50% | Action: 30%
                        </div>
                    </div>
                </div>
            </div>
        `;

        const sAtt = this.querySelector('#tpb-att');
        const sNorm = this.querySelector('#tpb-norm');
        const sPbc = this.querySelector('#tpb-pbc');
        
        const pAtt = this.querySelector('#path-att');
        const pNorm = this.querySelector('#path-norm');
        const pPbc = this.querySelector('#path-pbc');
        const pPbcBeh = this.querySelector('#path-pbc-beh');
        const pIntBeh = this.querySelector('#path-int-beh');
        
        const output = this.querySelector('#tpb-output');

        const update = () => {
            const att = parseInt(sAtt.value);
            const norm = parseInt(sNorm.value);
            const pbc = parseInt(sPbc.value);
            
            // Visual path thickness based on strength
            pAtt.setAttribute('stroke-width', Math.max(1, att / 10));
            pNorm.setAttribute('stroke-width', Math.max(1, norm / 10));
            pPbc.setAttribute('stroke-width', Math.max(1, pbc / 10));
            pPbcBeh.setAttribute('stroke-width', Math.max(1, pbc / 15));
            
            // Intention is a weighted sum (simplified)
            let int = (att * 0.4) + (norm * 0.3) + (pbc * 0.3);
            
            // Action requires intention, but is bottlenecked directly by PBC
            let act = (int * 0.6) + (pbc * 0.4);
            
            // Int-Beh path thickness
            pIntBeh.setAttribute('stroke-width', Math.max(1, int / 10));
            
            output.innerHTML = \`Intention: \${Math.round(int)}% | Action: \${Math.round(act)}%\`;
        };

        sAtt.addEventListener('input', update);
        sNorm.addEventListener('input', update);
        sPbc.addEventListener('input', update);
        update();
    }
}
customElements.define('hbm-tpb-widget', HBMTPBWidget);


// -------------------------------------------------------------------------
// 5. hbm-05: KAP vs. TPB Profile Selector
// -------------------------------------------------------------------------
class HBMKapTpbCompareWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">KAP vs. TPB Diagnosis Simulator</h3>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1.5rem;">
                    <button data-profile="idealist" style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #D97706; color: white; cursor: pointer; font-weight: bold;">The Frustrated Idealist</button>
                    <button data-profile="follower" style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #FCD34D; color: #92400E; cursor: pointer;">The Reluctant Follower</button>
                    <button data-profile="uninformed" style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #FCD34D; color: #92400E; cursor: pointer;">The Uninformed Rider</button>
                </div>
                
                <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#4B5563; text-align: center;">KAP Diagnosis</h4>
                        <p id="kaptpb-kap-diag" style="font-style: italic; color: #1F2937;">Select a profile to see how KAP evaluates it.</p>
                        <div style="font-size: 0.9rem; background: #F3F4F6; padding: 0.5rem; border-radius: 4px;">
                            <strong>Variables Checked:</strong><br>
                            - Knowledge<br>
                            - Attitude
                        </div>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#4B5563; text-align: center;">TPB Diagnosis</h4>
                        <p id="kaptpb-tpb-diag" style="font-style: italic; color: #1F2937;">Select a profile to see how TPB evaluates it.</p>
                        <div style="font-size: 0.9rem; background: #F3F4F6; padding: 0.5rem; border-radius: 4px;">
                            <strong>Variables Checked:</strong><br>
                            - Attitude<br>
                            - Subjective Norms<br>
                            - Perceived Control
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const data = {
            idealist: {
                kap: "Sees high Knowledge and Attitude, but low Practice. KAP is confused and assumes a 'gap' requiring more education.",
                tpb: "Sees high Attitude, but identifies low Perceived Behavioral Control (transit is too far) as the real barrier blocking Intention and Action."
            },
            follower: {
                kap: "Sees low Knowledge and moderate Attitude, but high Practice. KAP concludes they are acting randomly or need education.",
                tpb: "Sees low Attitude, but extremely high Subjective Norms (all their friends take the train). Correctly predicts action based on social pressure."
            },
            uninformed: {
                kap: "Correctly identifies that low Knowledge leads to low Attitude and low Practice. Prescribes an information campaign.",
                tpb: "Agrees on low Attitude, but also checks Norms and Control. If Control is low anyway, TPB says an information campaign alone will fail."
            }
        };
        
        const btns = this.querySelectorAll('button');
        const kapDiag = this.querySelector('#kaptpb-kap-diag');
        const tpbDiag = this.querySelector('#kaptpb-tpb-diag');
        
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Reset buttons
                btns.forEach(b => {
                    b.style.background = '#FCD34D';
                    b.style.color = '#92400E';
                    b.style.fontWeight = 'normal';
                });
                // Set active
                btn.style.background = '#D97706';
                btn.style.color = 'white';
                btn.style.fontWeight = 'bold';
                
                const profile = btn.getAttribute('data-profile');
                kapDiag.textContent = data[profile].kap;
                tpbDiag.textContent = data[profile].tpb;
            });
        });
        
        // Init first
        btns[0].click();
    }
}
customElements.define('hbm-kap-tpb-compare-widget', HBMKapTpbCompareWidget);

// -------------------------------------------------------------------------
// 6. hbm-06: Health Belief Model Threat Calculator
// -------------------------------------------------------------------------
class HBMHbmWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Health Belief Model Calculator: Cycling to Work</h3>
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#B45309;">Threat Perception</h4>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: flex; justify-content: space-between; font-weight: bold;">
                                <span>Susceptibility to Crash</span> <span id="hbm-val-sus">50</span>
                            </label>
                            <input type="range" id="hbm-slide-sus" min="0" max="100" value="50" style="width: 100%; accent-color: #EF4444;">
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: flex; justify-content: space-between; font-weight: bold;">
                                <span>Severity of Crash</span> <span id="hbm-val-sev">80</span>
                            </label>
                            <input type="range" id="hbm-slide-sev" min="0" max="100" value="80" style="width: 100%; accent-color: #B91C1C;">
                        </div>
                        <div style="padding: 0.5rem; background: #FEE2E2; border-radius: 4px; text-align: center;">
                            <strong>Total Threat: <span id="hbm-total-threat">65</span>/100</strong>
                        </div>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#059669;">Action Evaluation</h4>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: flex; justify-content: space-between; font-weight: bold;">
                                <span>Benefits of Cycling</span> <span id="hbm-val-ben">60</span>
                            </label>
                            <input type="range" id="hbm-slide-ben" min="0" max="100" value="60" style="width: 100%; accent-color: #10B981;">
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: flex; justify-content: space-between; font-weight: bold;">
                                <span>Barriers (Sweat, Effort)</span> <span id="hbm-val-bar">70</span>
                            </label>
                            <input type="range" id="hbm-slide-bar" min="0" max="100" value="70" style="width: 100%; accent-color: #F59E0B;">
                        </div>
                        <div style="padding: 0.5rem; background: #D1FAE5; border-radius: 4px; text-align: center;">
                            <strong>Net Benefit: <span id="hbm-net-benefit">-10</span>/100</strong>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 1.5rem; padding: 1rem; background: #fff; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                    <h4 style="margin-top:0;">Likelihood of Cycling: <span id="hbm-likelihood" style="font-size: 1.2em; color: #D97706;">Low</span></h4>
                    <p id="hbm-commentary" style="margin-bottom:0; font-style: italic; color: #666;"></p>
                </div>
            </div>
        `;
        
        const ids = ['sus', 'sev', 'ben', 'bar'];
        const els = {};
        ids.forEach(id => {
            els[id] = {
                slide: this.querySelector('#hbm-slide-'+id),
                val: this.querySelector('#hbm-val-'+id)
            };
        });
        
        const outThreat = this.querySelector('#hbm-total-threat');
        const outNet = this.querySelector('#hbm-net-benefit');
        const outLike = this.querySelector('#hbm-likelihood');
        const outComm = this.querySelector('#hbm-commentary');

        const update = () => {
            const vals = {};
            ids.forEach(id => {
                vals[id] = parseInt(els[id].slide.value);
                els[id].val.textContent = vals[id];
            });
            
            const threat = (vals.sus + vals.sev) / 2;
            const net = vals.ben - vals.bar;
            
            outThreat.textContent = threat;
            outNet.textContent = net;
            
            let like = net - (threat * 0.5); 
            
            if (like < 0) {
                outLike.textContent = "Very Low";
                outLike.style.color = "#DC2626";
                outComm.textContent = "Barriers outweigh benefits, and threat perception drives them to a safer mode.";
            } else if (like < 20) {
                outLike.textContent = "Moderate";
                outLike.style.color = "#F59E0B";
                outComm.textContent = "A toss-up. Lowering barriers (e.g. e-bikes) might tip the scale.";
            } else {
                outLike.textContent = "High";
                outLike.style.color = "#10B981";
                outComm.textContent = "High perceived benefits overcome barriers, and threat perception is manageable.";
            }
        };

        ids.forEach(id => els[id].slide.addEventListener('input', update));
        update();
    }
}
customElements.define('hbm-hbm-widget', HBMHbmWidget);

// -------------------------------------------------------------------------
// 7. hbm-07: PMT Fear-Coping Simulator
// -------------------------------------------------------------------------
class HBMPmtWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">PMT Fear vs. Coping Simulator: Evacuation</h3>
                <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
                    <div style="background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc; min-width: 200px;">
                        <label style="display: block; font-weight: bold;">Threat Appraisal (Fear)</label>
                        <input type="range" id="pmt-threat" min="0" max="100" value="80" style="width: 100%; accent-color: #EF4444;">
                    </div>
                    <div style="background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc; min-width: 200px;">
                        <label style="display: block; font-weight: bold;">Coping Appraisal (Efficacy)</label>
                        <input type="range" id="pmt-coping" min="0" max="100" value="20" style="width: 100%; accent-color: #10B981;">
                    </div>
                </div>
                
                <div style="margin-top: 2rem; position: relative; height: 150px; background: #fff; border: 1px solid #ccc; border-radius: 8px; overflow: hidden; display: flex;">
                    <div id="pmt-outcome" style="flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column; color: white; transition: background 0.3s;">
                        <h2 id="pmt-status" style="margin: 0; font-size: 2rem;">Maladaptive Denial</h2>
                        <p id="pmt-desc" style="margin: 0; margin-top: 0.5rem; text-align: center; padding: 0 1rem;"></p>
                    </div>
                </div>
            </div>
        `;
        
        const sThreat = this.querySelector('#pmt-threat');
        const sCoping = this.querySelector('#pmt-coping');
        const outcome = this.querySelector('#pmt-outcome');
        const status = this.querySelector('#pmt-status');
        const desc = this.querySelector('#pmt-desc');

        const update = () => {
            const t = parseInt(sThreat.value);
            const c = parseInt(sCoping.value);
            
            if (t < 40) {
                outcome.style.background = "#9CA3AF";
                status.textContent = "No Action";
                desc.textContent = "Threat is ignored. The hurricane is not seen as dangerous.";
            } else if (t >= 40 && c < 50) {
                outcome.style.background = "#DC2626";
                status.textContent = "Maladaptive Denial / Fatalism";
                desc.textContent = "High fear, but no way to cope. 'I can't evacuate, so I'll just hope for the best.'";
            } else {
                outcome.style.background = "#059669";
                status.textContent = "Protective Action";
                desc.textContent = "High fear + High efficacy. 'This is dangerous, but I have a plan and resources to leave.'";
            }
        };

        sThreat.addEventListener('input', update);
        sCoping.addEventListener('input', update);
        update();
    }
}
customElements.define('hbm-pmt-widget', HBMPmtWidget);

// -------------------------------------------------------------------------
// 8. hbm-08: Transtheoretical Model Stages
// -------------------------------------------------------------------------
class HBMTtmWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">TTM Stages of Change: Adopting Transit</h3>
                <div style="display: flex; justify-content: space-between; position: relative; margin: 2rem 0;">
                    <!-- Line behind steps -->
                    <div style="position: absolute; top: 20px; left: 10%; right: 10%; height: 4px; background: #ccc; z-index: 1;"></div>
                    
                    <!-- Steps -->
                    <div class="ttm-step" data-stage="1" style="position: relative; z-index: 2; text-align: center; cursor: pointer; flex: 1;">
                        <div style="width: 44px; height: 44px; background: #D97706; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto; transition: transform 0.2s;">1</div>
                        <div style="font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">Precontemplation</div>
                    </div>
                    <div class="ttm-step" data-stage="2" style="position: relative; z-index: 2; text-align: center; cursor: pointer; flex: 1;">
                        <div style="width: 44px; height: 44px; background: #fff; border: 2px solid #D97706; color: #D97706; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto; transition: transform 0.2s;">2</div>
                        <div style="font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">Contemplation</div>
                    </div>
                    <div class="ttm-step" data-stage="3" style="position: relative; z-index: 2; text-align: center; cursor: pointer; flex: 1;">
                        <div style="width: 44px; height: 44px; background: #fff; border: 2px solid #D97706; color: #D97706; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto; transition: transform 0.2s;">3</div>
                        <div style="font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">Preparation</div>
                    </div>
                    <div class="ttm-step" data-stage="4" style="position: relative; z-index: 2; text-align: center; cursor: pointer; flex: 1;">
                        <div style="width: 44px; height: 44px; background: #fff; border: 2px solid #D97706; color: #D97706; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto; transition: transform 0.2s;">4</div>
                        <div style="font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">Action</div>
                    </div>
                    <div class="ttm-step" data-stage="5" style="position: relative; z-index: 2; text-align: center; cursor: pointer; flex: 1;">
                        <div style="width: 44px; height: 44px; background: #fff; border: 2px solid #D97706; color: #D97706; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto; transition: transform 0.2s;">5</div>
                        <div style="font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">Maintenance</div>
                    </div>
                </div>
                
                <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; min-height: 120px;">
                    <h4 id="ttm-title" style="margin-top: 0; color: #B45309;">1. Precontemplation</h4>
                    <p id="ttm-desc" style="margin-bottom: 0.5rem;">"I drive every day. I don't even think about the bus."</p>
                    <p id="ttm-intervention" style="margin-bottom: 0; font-size: 0.9rem; color: #059669;"><strong>Intervention needed:</strong> Consciousness raising (awareness of environmental impact, cost of driving).</p>
                </div>
            </div>
        `;
        
        const data = {
            1: { title: "1. Precontemplation", desc: "\"I drive every day. I don't even think about the bus.\"", int: "Consciousness raising (awareness of environmental impact, cost of driving)." },
            2: { title: "2. Contemplation", desc: "\"Traffic is getting bad. Maybe I should try the bus sometime in the next 6 months.\"", int: "Environmental reevaluation. Tip the decisional balance (pros vs. cons)." },
            3: { title: "3. Preparation", desc: "\"I'm going to take the bus next week. I downloaded the transit app and bought a pass.\"", int: "Self-efficacy building. Provide maps, schedules, and free trial passes." },
            4: { title: "4. Action", desc: "\"I've been taking the bus for 2 weeks now.\"", int: "Contingency management. Rewarding the behavior and solving immediate problems (e.g. what if it rains?)." },
            5: { title: "5. Maintenance", desc: "\"Taking the bus is just how I commute now. I've done it for a year.\"", int: "Relapse prevention. Ensure service reliability so they don't revert to driving." }
        };

        const steps = this.querySelectorAll('.ttm-step');
        const title = this.querySelector('#ttm-title');
        const desc = this.querySelector('#ttm-desc');
        const intervention = this.querySelector('#ttm-intervention');

        steps.forEach(step => {
            step.addEventListener('click', (e) => {
                const stage = step.getAttribute('data-stage');
                
                steps.forEach(s => {
                    const circle = s.querySelector('div');
                    circle.style.background = '#fff';
                    circle.style.color = '#D97706';
                    circle.style.transform = 'scale(1)';
                });
                
                const circle = step.querySelector('div');
                circle.style.background = '#D97706';
                circle.style.color = 'white';
                circle.style.transform = 'scale(1.1)';
                
                title.textContent = data[stage].title;
                desc.textContent = data[stage].desc;
                intervention.innerHTML = `<strong>Intervention needed:</strong> ${data[stage].int}`;
            });
        });
    }
}
customElements.define('hbm-ttm-widget', HBMTtmWidget);

// -------------------------------------------------------------------------
// 9. hbm-09: SCT Reciprocal Determinism
// -------------------------------------------------------------------------
class HBMSctWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">SCT: Reciprocal Determinism Triangle</h3>
                <p style="font-size: 0.9rem; color: #555;">Click any vertex to see how a change cascades through the system.</p>
                
                <div style="display: flex; gap: 2rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap;">
                    <!-- Triangle Visual -->
                    <div style="position: relative; width: 250px; height: 250px; flex-shrink: 0;">
                        <!-- Arrows -->
                        <svg width="250" height="250" style="position: absolute; top:0; left:0; z-index: 1;">
                            <line x1="125" y1="40" x2="40" y2="200" stroke="#ccc" stroke-width="3" />
                            <line x1="40" y1="200" x2="210" y2="200" stroke="#ccc" stroke-width="3" />
                            <line x1="210" y1="200" x2="125" y2="40" stroke="#ccc" stroke-width="3" />
                        </svg>
                        
                        <!-- Nodes -->
                        <button class="sct-node" data-node="person" style="position: absolute; top: 0; left: 75px; width: 100px; padding: 0.5rem; border: 2px solid #3B82F6; background: #fff; border-radius: 8px; cursor: pointer; z-index: 2; font-weight: bold; transition: all 0.2s;">Personal Factors</button>
                        <button class="sct-node" data-node="behavior" style="position: absolute; bottom: 0; left: 0; width: 100px; padding: 0.5rem; border: 2px solid #10B981; background: #fff; border-radius: 8px; cursor: pointer; z-index: 2; font-weight: bold; transition: all 0.2s;">Behavior</button>
                        <button class="sct-node" data-node="env" style="position: absolute; bottom: 0; right: 0; width: 100px; padding: 0.5rem; border: 2px solid #8B5CF6; background: #fff; border-radius: 8px; cursor: pointer; z-index: 2; font-weight: bold; transition: all 0.2s;">Environment</button>
                    </div>
                    
                    <!-- Explanation Panel -->
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; text-align: left;">
                        <h4 id="sct-title" style="margin-top: 0; color: #4B5563;">Select a starting point</h4>
                        <p id="sct-desc">The triad of reciprocal determinism implies that changing any one factor ultimately changes the other two.</p>
                    </div>
                </div>
            </div>
        `;
        
        const data = {
            person: { title: "Change: Personal Factors", desc: "A person develops high self-efficacy for cycling (e.g. takes a class).<br><br>→ <strong>Behavior:</strong> They start cycling to work.<br>→ <strong>Environment:</strong> Their visible presence normalizes cycling for coworkers, slightly altering the social environment." },
            behavior: { title: "Change: Behavior", desc: "A person tries taking the bus for the first time due to a car breakdown.<br><br>→ <strong>Personal:</strong> They realize it's easier than expected, increasing self-efficacy.<br>→ <strong>Environment:</strong> Their ridership adds to transit revenue, supporting better service." },
            env: { title: "Change: Environment", desc: "The city builds a protected bike lane on the person's street.<br><br>→ <strong>Behavior:</strong> They buy a bike and start riding.<br>→ <strong>Personal:</strong> Their attitude toward cyclists improves, and they begin identifying as a 'cyclist'." }
        };

        const nodes = this.querySelectorAll('.sct-node');
        const title = this.querySelector('#sct-title');
        const desc = this.querySelector('#sct-desc');

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                const type = node.getAttribute('data-node');
                
                nodes.forEach(n => {
                    n.style.background = '#fff';
                    n.style.transform = 'scale(1)';
                });
                
                node.style.background = '#FDE68A';
                node.style.transform = 'scale(1.1)';
                
                title.textContent = data[type].title;
                desc.innerHTML = data[type].desc;
            });
        });
    }
}
customElements.define('hbm-sct-widget', HBMSctWidget);

// -------------------------------------------------------------------------
// 10. hbm-10: SDT Motivation Spectrum
// -------------------------------------------------------------------------
class HBMSdtWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Self-Determination Theory: The Motivation Spectrum</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Move the slider to see how different types of motivation feel and function.</p>
                
                <div style="margin: 2rem 0; position: relative;">
                    <div style="display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 0.5rem; font-size: 0.8rem; color: #666;">
                        <span>Amotivation</span>
                        <span>Extrinsic</span>
                        <span>Intrinsic</span>
                    </div>
                    <input type="range" id="sdt-slider" min="1" max="6" value="1" style="width: 100%; accent-color: #D97706;">
                </div>
                
                <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; min-height: 150px;">
                    <h4 id="sdt-type" style="margin-top: 0; color: #B45309;">Amotivation</h4>
                    <p id="sdt-desc" style="margin-bottom: 0.5rem;">"I don't know why I'm doing this. It seems pointless."</p>
                    <p id="sdt-sustain" style="margin-bottom: 0; font-size: 0.9rem; color: #DC2626;"><strong>Sustainability:</strong> None. Behavior will stop immediately.</p>
                </div>
            </div>
        `;
        
        const data = {
            1: { type: "Amotivation", desc: "\"I don't know why I take the bus. My car broke down and I have no choice.\"", sustain: "None. Behavior will stop as soon as the car is fixed.", color: "#DC2626" },
            2: { type: "External Regulation (Extrinsic)", desc: "\"I take the bus because parking costs $20 a day. I hate it, but I need the money.\"", sustain: "Low. Behavior is entirely dependent on the parking fee.", color: "#EA580C" },
            3: { type: "Introjected Regulation (Extrinsic)", desc: "\"I take the bus because I would feel guilty driving my SUV while my friends cycle.\"", sustain: "Low/Medium. Driven by internal pressure and ego, leading to resentment.", color: "#D97706" },
            4: { type: "Identified Regulation (Extrinsic)", desc: "\"I take the bus because I value the environment, even though the bus isn't very comfortable.\"", sustain: "Medium/High. The person consciously values the goal, even if the activity isn't fun.", color: "#65A30D" },
            5: { type: "Integrated Regulation (Extrinsic)", desc: "\"Taking the bus aligns with who I am as an urbanist. It's part of my identity.\"", sustain: "High. The behavior is fully integrated into the self-concept.", color: "#16A34A" },
            6: { type: "Intrinsic Motivation", desc: "\"I cycle to work because the ride itself is fun, relaxing, and enjoyable.\"", sustain: "Very High. The behavior is its own reward.", color: "#059669" }
        };

        const slider = this.querySelector('#sdt-slider');
        const typeEl = this.querySelector('#sdt-type');
        const descEl = this.querySelector('#sdt-desc');
        const sustainEl = this.querySelector('#sdt-sustain');

        const update = () => {
            const val = slider.value;
            typeEl.textContent = data[val].type;
            typeEl.style.color = data[val].color;
            descEl.textContent = data[val].desc;
            sustainEl.innerHTML = \`<strong>Sustainability:</strong> <span style="color: \${data[val].color}">\${data[val].sustain}</span>\`;
        };

        slider.addEventListener('input', update);
        update();
    }
}
customElements.define('hbm-sdt-widget', HBMSdtWidget);

// -------------------------------------------------------------------------
// 11. hbm-11: Diffusion of Innovations Curve
// -------------------------------------------------------------------------
class HBMDoiWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Diffusion of Innovations: Adopter Categories</h3>
                <p style="font-size: 0.9rem; color: #555;">Click on a segment of the adoption curve to see who they are.</p>
                
                <div style="display: flex; height: 100px; margin: 2rem 0; border-radius: 8px; overflow: hidden; border: 1px solid #ccc; cursor: pointer;">
                    <div class="doi-seg" data-cat="innovators" style="width: 2.5%; background: #3B82F6; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold; border-right: 1px solid #fff; transition: opacity 0.2s;">2.5%</div>
                    <div class="doi-seg" data-cat="early-adopters" style="width: 13.5%; background: #60A5FA; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; font-weight: bold; border-right: 1px solid #fff; transition: opacity 0.2s;">13.5%</div>
                    <div class="doi-seg" data-cat="early-majority" style="width: 34%; background: #93C5FD; display: flex; align-items: center; justify-content: center; color: #1E3A8A; font-weight: bold; border-right: 1px solid #fff; transition: opacity 0.2s;">34%</div>
                    <div class="doi-seg" data-cat="late-majority" style="width: 34%; background: #BFDBFE; display: flex; align-items: center; justify-content: center; color: #1E3A8A; font-weight: bold; border-right: 1px solid #fff; transition: opacity 0.2s;">34%</div>
                    <div class="doi-seg" data-cat="laggards" style="width: 16%; background: #DBEAFE; display: flex; align-items: center; justify-content: center; color: #1E3A8A; font-weight: bold; transition: opacity 0.2s;">16%</div>
                </div>
                
                <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; text-align: left; min-height: 120px;">
                    <h4 id="doi-title" style="margin-top: 0; color: #1E3A8A;">Select a category</h4>
                    <p id="doi-desc" style="margin-bottom: 0.5rem;"></p>
                    <p id="doi-strategy" style="margin-bottom: 0; font-size: 0.9rem; color: #059669;"></p>
                </div>
            </div>
        `;
        
        const data = {
            'innovators': { title: "Innovators (2.5%)", desc: "Risk-takers, tech enthusiasts, willing to tolerate bugs and high costs. (e.g., The first people to buy an EV when there were no chargers).", strat: "Strategy: Give them access. They don't need much persuasion, just the product." },
            'early-adopters': { title: "Early Adopters (13.5%)", desc: "Opinion leaders, visionaries. They adopt early but are more integrated into the social system than innovators. They are the bridge to the masses.", strat: "Strategy: Provide them with excellent support and let them influence others." },
            'early-majority': { title: "Early Majority (34%)", desc: "Pragmatists. They need evidence that the innovation works reliably before adopting. They look to Early Adopters for cues.", strat: "Strategy: Highlight the 'chasm' cross. Provide case studies, guarantees, and show that it's safe." },
            'late-majority': { title: "Late Majority (34%)", desc: "Conservatives. Skeptical of change, adopting only out of economic necessity or increasing peer pressure.", strat: "Strategy: Emphasize social norms ('everyone else is doing it') and lower the costs/risks to zero." },
            'laggards': { title: "Laggards (16%)", desc: "Traditionalists. Highly skeptical of change, often isolated from opinion leaders. They adopt only when forced or when the old way is impossible.", strat: "Strategy: Usually not worth targeting with marketing. Wait for structural obsolescence." }
        };

        const segs = this.querySelectorAll('.doi-seg');
        const title = this.querySelector('#doi-title');
        const desc = this.querySelector('#doi-desc');
        const strategy = this.querySelector('#doi-strategy');

        segs.forEach(seg => {
            seg.addEventListener('click', () => {
                segs.forEach(s => s.style.opacity = '0.5');
                seg.style.opacity = '1';
                const cat = seg.getAttribute('data-cat');
                title.textContent = data[cat].title;
                desc.textContent = data[cat].desc;
                strategy.innerHTML = \`<strong>\${data[cat].strat}</strong>\`;
            });
        });
        
        if(segs[1]) segs[1].click(); // default
    }
}
customElements.define('hbm-doi-widget', HBMDoiWidget);

// -------------------------------------------------------------------------
// 12. hbm-12: Norm Activation Model (NAM) Flow
// -------------------------------------------------------------------------
class HBMNamWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Norm Activation Model: Idling Engines</h3>
                
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#4B5563;">Preconditions</h4>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; font-weight: bold; margin-bottom: 0.25rem;">Awareness of Consequences (AC)</label>
                            <input type="range" id="nam-ac" min="0" max="100" value="20" style="width: 100%; accent-color: #3B82F6;">
                            <small style="color: #666;">"I know idling harms local air quality."</small>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; font-weight: bold; margin-bottom: 0.25rem;">Ascription of Responsibility (AR)</label>
                            <input type="range" id="nam-ar" min="0" max="100" value="20" style="width: 100%; accent-color: #8B5CF6;">
                            <small style="color: #666;">"My individual exhaust actually makes a difference."</small>
                        </div>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; display: flex; flex-direction: column; justify-content: center; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                        <h4 style="margin-top:0; color:#059669;">Personal Norm</h4>
                        <p style="font-size: 0.9rem; color: #555;">Sense of moral obligation to turn off the engine.</p>
                        <div style="margin: 1rem 0; height: 30px; background: #eee; border-radius: 15px; overflow: hidden;">
                            <div id="nam-pn-bar" style="height: 100%; width: 10%; background: #10B981; transition: width 0.3s;"></div>
                        </div>
                        <h2 id="nam-behavior" style="margin: 0; color: #DC2626;">Leaves Engine Running</h2>
                    </div>
                </div>
            </div>
        `;
        
        const sAc = this.querySelector('#nam-ac');
        const sAr = this.querySelector('#nam-ar');
        const bPn = this.querySelector('#nam-pn-bar');
        const tBeh = this.querySelector('#nam-behavior');

        const update = () => {
            const ac = parseInt(sAc.value);
            const ar = parseInt(sAr.value);
            
            // NAM implies an interaction: you need BOTH awareness and responsibility
            const pn = (ac * ar) / 100; 
            
            bPn.style.width = pn + '%';
            
            if (pn < 40) {
                tBeh.textContent = "Leaves Engine Running";
                tBeh.style.color = "#DC2626";
            } else if (pn < 70) {
                tBeh.textContent = "Feels Guilty, Might Turn Off";
                tBeh.style.color = "#F59E0B";
            } else {
                tBeh.textContent = "Turns Engine Off";
                tBeh.style.color = "#10B981";
            }
        };

        sAc.addEventListener('input', update);
        sAr.addEventListener('input', update);
        update();
    }
}
customElements.define('hbm-nam-widget', HBMNamWidget);

// -------------------------------------------------------------------------
// 13. hbm-13: Value-Belief-Norm (VBN) Chain
// -------------------------------------------------------------------------
class HBMVbnWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Value-Belief-Norm Causal Chain</h3>
                <p style="font-size: 0.9rem; color: #555;">Click the links in the chain to trace the path from general values to specific behavior.</p>
                
                <div style="display: flex; gap: 0.5rem; justify-content: center; margin: 2rem 0; flex-wrap: wrap;">
                    <button class="vbn-link" data-link="values" style="padding: 0.5rem 1rem; border: 2px solid #3B82F6; background: #fff; font-weight: bold; border-radius: 4px; cursor: pointer;">Values</button>
                    <span style="font-size: 1.5rem; color: #ccc;">→</span>
                    <button class="vbn-link" data-link="nep" style="padding: 0.5rem 1rem; border: 2px solid #6366F1; background: #fff; font-weight: bold; border-radius: 4px; cursor: pointer;">NEP Beliefs</button>
                    <span style="font-size: 1.5rem; color: #ccc;">→</span>
                    <button class="vbn-link" data-link="ac" style="padding: 0.5rem 1rem; border: 2px solid #8B5CF6; background: #fff; font-weight: bold; border-radius: 4px; cursor: pointer;">AC</button>
                    <span style="font-size: 1.5rem; color: #ccc;">→</span>
                    <button class="vbn-link" data-link="ar" style="padding: 0.5rem 1rem; border: 2px solid #D946EF; background: #fff; font-weight: bold; border-radius: 4px; cursor: pointer;">AR</button>
                    <span style="font-size: 1.5rem; color: #ccc;">→</span>
                    <button class="vbn-link" data-link="pn" style="padding: 0.5rem 1rem; border: 2px solid #F43F5E; background: #fff; font-weight: bold; border-radius: 4px; cursor: pointer;">Personal Norm</button>
                </div>
                
                <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; text-align: left; min-height: 100px;">
                    <h4 id="vbn-title" style="margin-top: 0; color: #1F2937;">Select a link</h4>
                    <p id="vbn-desc" style="margin-bottom: 0;"></p>
                </div>
            </div>
        `;
        
        const data = {
            'values': { title: "Values (Biospheric, Altruistic)", desc: "Stable, foundational life goals. E.g., 'I care deeply about preserving nature and protecting future generations.'" },
            'nep': { title: "New Ecological Paradigm (NEP)", desc: "General worldview about humanity's relationship with nature. E.g., 'Humanity is severely abusing the environment and approaching limits to growth.'" },
            'ac': { title: "Awareness of Consequences (AC)", desc: "Specific belief about a threat. E.g., 'I am aware that car emissions contribute directly to climate change, which threatens nature.'" },
            'ar': { title: "Ascription of Responsibility (AR)", desc: "Specific belief about personal role. E.g., 'My daily driving habits contribute to this problem, so I am partly responsible.'" },
            'pn': { title: "Personal Norm (PN)", desc: "Moral obligation to act. E.g., 'I feel a moral duty to commute by transit or bike to reduce my emissions.'" }
        };

        const links = this.querySelectorAll('.vbn-link');
        const title = this.querySelector('#vbn-title');
        const desc = this.querySelector('#vbn-desc');

        links.forEach(link => {
            link.addEventListener('click', () => {
                links.forEach(l => l.style.background = '#fff');
                link.style.background = '#FEF3C7';
                const id = link.getAttribute('data-link');
                title.textContent = data[id].title;
                desc.textContent = data[id].desc;
            });
        });
    }
}
customElements.define('hbm-vbn-widget', HBMVbnWidget);

// -------------------------------------------------------------------------
// 14. hbm-14: Social Practice Theory Triangle
// -------------------------------------------------------------------------
class HBMSptWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Social Practice Theory: The Practice of "Driving to Work"</h3>
                <p style="font-size: 0.9rem; color: #555;">A practice exists only when these three elements are brought together. Click an element to disrupt it.</p>
                
                <div style="display: flex; gap: 2rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap;">
                    <div style="position: relative; width: 250px; height: 250px; flex-shrink: 0;">
                        <svg width="250" height="250" style="position: absolute; top:0; left:0; z-index: 1;">
                            <line x1="125" y1="40" x2="40" y2="200" stroke="#ccc" stroke-width="3" />
                            <line x1="40" y1="200" x2="210" y2="200" stroke="#ccc" stroke-width="3" />
                            <line x1="210" y1="200" x2="125" y2="40" stroke="#ccc" stroke-width="3" />
                        </svg>
                        
                        <button class="spt-node" data-node="materials" style="position: absolute; top: 0; left: 75px; width: 100px; padding: 0.5rem; border: 2px solid #3B82F6; background: #fff; border-radius: 8px; cursor: pointer; z-index: 2; font-weight: bold;">Materials</button>
                        <button class="spt-node" data-node="competences" style="position: absolute; bottom: 0; left: 0; width: 100px; padding: 0.5rem; border: 2px solid #10B981; background: #fff; border-radius: 8px; cursor: pointer; z-index: 2; font-weight: bold;">Competences</button>
                        <button class="spt-node" data-node="meanings" style="position: absolute; bottom: 0; right: 0; width: 100px; padding: 0.5rem; border: 2px solid #8B5CF6; background: #fff; border-radius: 8px; cursor: pointer; z-index: 2; font-weight: bold;">Meanings</button>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; text-align: left;">
                        <h4 id="spt-title" style="margin-top: 0; color: #4B5563;">Status: The Practice is Stable</h4>
                        <p id="spt-desc">The car, the driving skills, and the meaning of convenience all align perfectly to sustain the practice.</p>
                        <div id="spt-status" style="margin-top: 1rem; padding: 0.5rem; background: #D1FAE5; color: #065F46; border-radius: 4px; font-weight: bold; text-align: center;">Practice Intact</div>
                    </div>
                </div>
            </div>
        `;
        
        const data = {
            materials: { title: "Disrupting Materials", desc: "You remove the physical artifacts: Close parking lots, raise gas prices to $10/gal, or close lanes. Without the material infrastructure, driving skills and meanings don't matter—the practice collapses.", state: "Practice Broken", color: "#FEE2E2", text: "#991B1B" },
            competences: { title: "Disrupting Competences", desc: "Introduce complex new traffic rules or require driving a manual transmission. Drivers lose their established skills and automaticity. The practice stutters.", state: "Practice Unstable", color: "#FEF3C7", text: "#92400E" },
            meanings: { title: "Disrupting Meanings", desc: "Society redefines driving alone in an SUV as antisocial rather than a symbol of freedom. While the car and skills remain, the motivation drains away.", state: "Practice Eroding", color: "#FEF3C7", text: "#92400E" }
        };

        const nodes = this.querySelectorAll('.spt-node');
        const title = this.querySelector('#spt-title');
        const desc = this.querySelector('#spt-desc');
        const status = this.querySelector('#spt-status');

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                const type = node.getAttribute('data-node');
                
                nodes.forEach(n => n.style.background = '#fff');
                node.style.background = '#FDE68A';
                
                title.textContent = data[type].title;
                desc.textContent = data[type].desc;
                
                status.textContent = data[type].state;
                status.style.background = data[type].color;
                status.style.color = data[type].text;
            });
        });
    }
}
customElements.define('hbm-spt-widget', HBMSptWidget);

// -------------------------------------------------------------------------
// 15. hbm-15: Discrete Choice Models (Utility Calculator)
// -------------------------------------------------------------------------
class HBMDcmWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Discrete Choice Model: Commute Mode</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Adjust the attributes to see how the probability of choosing Car vs. Transit changes.</p>
                
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#4B5563;">Car Attributes</h4>
                        <div style="margin-bottom: 0.5rem;">
                            <label style="display:flex; justify-content:space-between; font-size:0.8rem;"><span>Travel Time (min)</span> <span id="val-car-time">30</span></label>
                            <input type="range" id="car-time" min="10" max="60" value="30" style="width: 100%; accent-color: #3B82F6;">
                        </div>
                        <div style="margin-bottom: 0.5rem;">
                            <label style="display:flex; justify-content:space-between; font-size:0.8rem;"><span>Cost ($)</span> <span id="val-car-cost">5</span></label>
                            <input type="range" id="car-cost" min="1" max="20" value="5" style="width: 100%; accent-color: #3B82F6;">
                        </div>
                        
                        <h4 style="margin-top:1rem; color:#4B5563;">Transit Attributes</h4>
                        <div style="margin-bottom: 0.5rem;">
                            <label style="display:flex; justify-content:space-between; font-size:0.8rem;"><span>Travel Time (min)</span> <span id="val-tr-time">45</span></label>
                            <input type="range" id="tr-time" min="10" max="90" value="45" style="width: 100%; accent-color: #10B981;">
                        </div>
                        <div style="margin-bottom: 0.5rem;">
                            <label style="display:flex; justify-content:space-between; font-size:0.8rem;"><span>Cost ($)</span> <span id="val-tr-cost">2</span></label>
                            <input type="range" id="tr-cost" min="0" max="10" value="2" style="width: 100%; accent-color: #10B981;">
                        </div>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="margin-top:0; color:#1F2937; text-align: center;">Choice Probabilities (Logit Model)</h4>
                        
                        <div style="margin-bottom: 1rem;">
                            <div style="display:flex; justify-content:space-between; font-weight:bold; color:#1D4ED8;"><span>Car</span> <span id="prob-car">0%</span></div>
                            <div style="height:20px; background:#eee; border-radius:10px; overflow:hidden;">
                                <div id="bar-car" style="height:100%; width:0%; background:#3B82F6; transition:width 0.2s;"></div>
                            </div>
                            <small style="color:#999;" id="util-car"></small>
                        </div>
                        
                        <div>
                            <div style="display:flex; justify-content:space-between; font-weight:bold; color:#047857;"><span>Transit</span> <span id="prob-tr">0%</span></div>
                            <div style="height:20px; background:#eee; border-radius:10px; overflow:hidden;">
                                <div id="bar-tr" style="height:100%; width:0%; background:#10B981; transition:width 0.2s;"></div>
                            </div>
                            <small style="color:#999;" id="util-tr"></small>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const inputs = ['car-time', 'car-cost', 'tr-time', 'tr-cost'];
        const elements = {};
        
        // Use timeout to ensure DOM elements are created before accessing them
        setTimeout(() => {
            inputs.forEach(id => {
                elements[id] = this.querySelector('#' + id);
                elements['val-' + id] = this.querySelector('#val-' + id);
                if (elements[id]) {
                    elements[id].addEventListener('input', () => update());
                }
            });

            const probCar = this.querySelector('#prob-car');
            const probTr = this.querySelector('#prob-tr');
            const barCar = this.querySelector('#bar-car');
            const barTr = this.querySelector('#bar-tr');
            const utilCarStr = this.querySelector('#util-car');
            const utilTrStr = this.querySelector('#util-tr');

            // Parameters (Betas)
            const B_TIME = -0.05; // disutility per minute
            const B_COST = -0.2;  // disutility per dollar
            const ASC_CAR = 1.0;  // Alternative Specific Constant for Car (baseline preference)

            const update = () => {
                if (!elements['car-time']) return;
                
                const ct = parseFloat(elements['car-time'].value);
                const cc = parseFloat(elements['car-cost'].value);
                const tt = parseFloat(elements['tr-time'].value);
                const tc = parseFloat(elements['tr-cost'].value);

                elements['val-car-time'].textContent = ct;
                elements['val-car-cost'].textContent = cc;
                elements['val-tr-time'].textContent = tt;
                elements['val-tr-cost'].textContent = tc;

                // Utility functions
                const U_car = ASC_CAR + (B_TIME * ct) + (B_COST * cc);
                const U_tr = 0 + (B_TIME * tt) + (B_COST * tc);

                // MNL Probabilities
                const exp_car = Math.exp(U_car);
                const exp_tr = Math.exp(U_tr);
                const sum_exp = exp_car + exp_tr;
                
                const P_car = exp_car / sum_exp;
                const P_tr = exp_tr / sum_exp;

                probCar.textContent = (P_car * 100).toFixed(1) + '%';
                probTr.textContent = (P_tr * 100).toFixed(1) + '%';
                barCar.style.width = (P_car * 100) + '%';
                barTr.style.width = (P_tr * 100) + '%';
                
                utilCarStr.textContent = \`Utility: \${U_car.toFixed(2)}\`;
                utilTrStr.textContent = \`Utility: \${U_tr.toFixed(2)}\`;
            };

            update();
        }, 0);
    }
}
customElements.define('hbm-dcm-widget', HBMDcmWidget);

// -------------------------------------------------------------------------
// 16. hbm-16: Prospect Theory Value Function
// -------------------------------------------------------------------------
class HBMPtWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Prospect Theory: Asymmetric Value of Time</h3>
                <p style="font-size: 0.9rem; color: #555;">Losses loom larger than gains. See how subjective value changes around a reference point.</p>
                
                <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin-top: 1.5rem;">
                    <!-- Chart area -->
                    <div style="flex: 1; position: relative; height: 250px; background: #fff; border: 1px solid #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden; min-width: 250px;">
                        <svg width="100%" height="100%" viewBox="-100 -100 200 200" preserveAspectRatio="xMidYMid meet">
                            <!-- Axes -->
                            <line x1="-100" y1="0" x2="100" y2="0" stroke="#ccc" stroke-width="1" />
                            <line x1="0" y1="-100" x2="0" y2="100" stroke="#ccc" stroke-width="1" />
                            <text x="50" y="-10" font-size="10" fill="#666">Gains (+)</text>
                            <text x="-90" y="-10" font-size="10" fill="#666">Losses (-)</text>
                            <text x="5" y="-80" font-size="10" fill="#666">Value</text>
                            
                            <!-- Value Curve -->
                            <path d="M 0 0 Q 30 -50 100 -70" stroke="#10B981" fill="none" stroke-width="3" />
                            <path d="M -100 95 Q -30 60 0 0" stroke="#EF4444" fill="none" stroke-width="3" />
                            
                            <!-- Reference Point -->
                            <circle cx="0" cy="0" r="4" fill="#1F2937" />
                            
                            <!-- Dynamic point -->
                            <circle id="pt-point" cx="0" cy="0" r="6" fill="#3B82F6" style="transition: all 0.3s;" />
                        </svg>
                    </div>
                    
                    <!-- Controls -->
                    <div style="flex: 1; background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; text-align: left; min-width: 250px;">
                        <h4 style="margin-top:0;">Commute Time Scenarios</h4>
                        <p style="font-size:0.8rem; color:#666;">Reference point: Your usual 30-minute commute.</p>
                        
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
                            <button class="pt-btn" data-x="40" data-y="-40" style="padding: 0.5rem; border: 1px solid #ccc; background: #f9f9f9; cursor: pointer; border-radius: 4px; text-align: left;">
                                <strong>Scenario A (Gain):</strong> Arrive 10 mins <em>early</em>.<br>
                                <span style="font-size:0.8rem; color:#10B981;">Subjective Value: +Mildly Happy</span>
                            </button>
                            <button class="pt-btn" data-x="-40" data-y="70" style="padding: 0.5rem; border: 1px solid #ccc; background: #f9f9f9; cursor: pointer; border-radius: 4px; text-align: left;">
                                <strong>Scenario B (Loss):</strong> Arrive 10 mins <em>late</em>.<br>
                                <span style="font-size:0.8rem; color:#EF4444;">Subjective Value: -Extremely Annoyed</span>
                            </button>
                            <button class="pt-btn" data-x="90" data-y="-65" style="padding: 0.5rem; border: 1px solid #ccc; background: #f9f9f9; cursor: pointer; border-radius: 4px; text-align: left;">
                                <strong>Scenario C (Gain):</strong> Arrive 30 mins <em>early</em>.<br>
                                <span style="font-size:0.8rem; color:#10B981;">Subjective Value: +Moderately Happy (Diminishing)</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const pt = this.querySelector('#pt-point');
            const btns = this.querySelectorAll('.pt-btn');

            if (pt && btns) {
                btns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        btns.forEach(b => b.style.background = '#f9f9f9');
                        btn.style.background = '#DBEAFE';
                        const x = btn.getAttribute('data-x');
                        const y = btn.getAttribute('data-y');
                        pt.setAttribute('cx', x);
                        pt.setAttribute('cy', y);
                    });
                });
            }
        }, 0);
    }
}
customElements.define('hbm-pt-widget', HBMPtWidget);

// -------------------------------------------------------------------------
// 17. hbm-17: Bounded Rationality (Satisficing)
// -------------------------------------------------------------------------
class HBMBoundedWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Bounded Rationality: The Parking Search</h3>
                <p style="font-size: 0.9rem; color: #555;">Searching for the absolute best parking spot takes too much time. You use a heuristic: stop at the first spot that is "good enough" (satisficing).</p>
                
                <div style="margin: 1.5rem 0; display: flex; flex-direction: column; align-items: center;">
                    <label style="font-weight: bold;">Your Threshold (Acceptable distance to destination)</label>
                    <input type="range" id="br-thresh" min="1" max="10" value="5" style="width: 200px; accent-color: #D97706; margin: 0.5rem 0;">
                    <div id="br-thresh-val" style="font-size: 0.8rem; color: #666;">Will accept any spot within 5 minutes walking.</div>
                </div>

                <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap;">
                    <div class="br-spot" data-dist="8" style="padding: 1rem; border: 2px solid #ccc; border-radius: 4px; background: #fff; width: 60px;">Spot 1<br><small>8 min</small></div>
                    <div class="br-spot" data-dist="6" style="padding: 1rem; border: 2px solid #ccc; border-radius: 4px; background: #fff; width: 60px;">Spot 2<br><small>6 min</small></div>
                    <div class="br-spot" data-dist="4" style="padding: 1rem; border: 2px solid #ccc; border-radius: 4px; background: #fff; width: 60px;">Spot 3<br><small>4 min</small></div>
                    <div class="br-spot" data-dist="2" style="padding: 1rem; border: 2px solid #ccc; border-radius: 4px; background: #fff; width: 60px;">Spot 4<br><small>2 min</small></div>
                    <div class="br-spot" data-dist="1" style="padding: 1rem; border: 2px solid #ccc; border-radius: 4px; background: #fff; width: 60px; border-color: #10B981;">Optimal<br><small>1 min</small></div>
                </div>
                
                <button id="br-search-btn" style="padding: 0.5rem 1.5rem; background: #3B82F6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Start Search</button>
                <div id="br-result" style="margin-top: 1rem; font-weight: bold; min-height: 48px; color: #1F2937;"></div>
            </div>
        `;
        
        setTimeout(() => {
            const threshInput = this.querySelector('#br-thresh');
            const threshVal = this.querySelector('#br-thresh-val');
            const spots = this.querySelectorAll('.br-spot');
            const searchBtn = this.querySelector('#br-search-btn');
            const result = this.querySelector('#br-result');

            if (threshInput && threshVal && searchBtn) {
                threshInput.addEventListener('input', () => {
                    threshVal.textContent = \`Will accept any spot within \${threshInput.value} minutes walking.\`;
                });

                searchBtn.addEventListener('click', async () => {
                    // Reset
                    spots.forEach(s => {
                        s.style.background = '#fff';
                        s.style.opacity = '1';
                    });
                    result.textContent = "Searching...";
                    searchBtn.disabled = true;

                    const threshold = parseInt(threshInput.value);
                    
                    for (let i = 0; i < spots.length; i++) {
                        const spot = spots[i];
                        const dist = parseInt(spot.getAttribute('data-dist'));
                        
                        spot.style.background = '#FEF08A'; // highlighting
                        
                        await new Promise(r => setTimeout(r, 600)); // wait
                        
                        if (dist <= threshold) {
                            spot.style.background = '#10B981';
                            spot.style.color = 'white';
                            result.textContent = \`Satisficed! Parked at Spot \${i+1} (\${dist} min). Ignored better spots because this was "good enough."\`;
                            searchBtn.disabled = false;
                            return;
                        } else {
                            spot.style.background = '#FEE2E2';
                            spot.style.opacity = '0.5';
                        }
                    }
                    
                    result.textContent = "No acceptable spots found! You drive around the block.";
                    searchBtn.disabled = false;
                });
            }
        }, 0);
    }
}
customElements.define('hbm-br-widget', HBMBoundedWidget);

// -------------------------------------------------------------------------
// 18. hbm-18: Habit Theory
// -------------------------------------------------------------------------
class HBMHabitWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Habit Loop: The Morning Commute</h3>
                <p style="font-size: 0.9rem; color: #555;">Habits bypass conscious decision-making. Click to trigger the loop.</p>
                
                <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
                    <div id="habit-cue" style="padding: 1.5rem; background: #fff; border: 2px solid #ccc; border-radius: 50%; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer; transition: all 0.3s; flex-direction: column;">
                        CUE<br><small style="font-weight:normal;">Leave house</small>
                    </div>
                    <div style="font-size: 1.5rem; color: #ccc;">→</div>
                    <div id="habit-routine" style="padding: 1.5rem; background: #fff; border: 2px solid #ccc; border-radius: 50%; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: all 0.3s; flex-direction: column;">
                        ROUTINE<br><small style="font-weight:normal;">Get in Car</small>
                    </div>
                    <div style="font-size: 1.5rem; color: #ccc;">→</div>
                    <div id="habit-reward" style="padding: 1.5rem; background: #fff; border: 2px solid #ccc; border-radius: 50%; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: all 0.3s; flex-direction: column;">
                        REWARD<br><small style="font-weight:normal;">Arrive at Work</small>
                    </div>
                </div>
                
                <div style="background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc; max-width: 400px; margin: 0 auto;">
                    <p id="habit-log" style="margin: 0; color: #1F2937; min-height: 48px;">Waiting for cue... Click the CUE circle to start.</p>
                    <div style="margin-top: 1rem;">
                        <label style="font-size: 0.8rem; font-weight: bold;">Habit Strength</label>
                        <div style="height: 10px; background: #eee; border-radius: 5px; overflow: hidden; margin-top: 0.25rem;">
                            <div id="habit-strength" style="height: 100%; width: 0%; background: #D97706; transition: width 0.3s;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const cue = this.querySelector('#habit-cue');
            const routine = this.querySelector('#habit-routine');
            const reward = this.querySelector('#habit-reward');
            const log = this.querySelector('#habit-log');
            const strength = this.querySelector('#habit-strength');
            
            let reps = 0;
            let running = false;

            if (cue) {
                cue.addEventListener('click', async () => {
                    if(running) return;
                    running = true;
                    reps++;
                    
                    // 1. Cue
                    cue.style.background = '#DBEAFE';
                    cue.style.borderColor = '#3B82F6';
                    log.innerHTML = "<strong>Cue encountered:</strong> You lock the front door at 8:00 AM.";
                    await new Promise(r => setTimeout(r, 800));
                    
                    // 2. Routine
                    cue.style.background = '#fff';
                    cue.style.borderColor = '#ccc';
                    routine.style.background = '#FEF08A';
                    routine.style.borderColor = '#EAB308';
                    log.innerHTML = "<strong>Routine executed:</strong> Autopilot engaged. You walk straight to the car without considering the bus.";
                    await new Promise(r => setTimeout(r, 800));
                    
                    // 3. Reward
                    routine.style.background = '#fff';
                    routine.style.borderColor = '#ccc';
                    reward.style.background = '#D1FAE5';
                    reward.style.borderColor = '#10B981';
                    log.innerHTML = "<strong>Reward received:</strong> Arrived at work safely. The neural pathway is reinforced.";
                    
                    // Update strength
                    const sVal = Math.min(reps * 20, 100);
                    strength.style.width = sVal + '%';
                    
                    await new Promise(r => setTimeout(r, 800));
                    reward.style.background = '#fff';
                    reward.style.borderColor = '#ccc';
                    
                    if(sVal >= 100) {
                        log.innerHTML = "<strong>Habit fully formed.</strong> Intentions and attitudes no longer predict this behavior.";
                    } else {
                        log.innerHTML = "Click the CUE to repeat the loop tomorrow.";
                    }
                    
                    running = false;
                });
            }
        }, 0);
    }
}
customElements.define('hbm-habit-widget', HBMHabitWidget);

// -------------------------------------------------------------------------
// 19. hbm-19: Dual-Process Models
// -------------------------------------------------------------------------
class HBMDualWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Dual-Process Model: Navigating Traffic</h3>
                
                <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap;">
                    <button id="sys1-btn" style="flex: 1; min-width: 200px; padding: 1rem; border: 2px solid #3B82F6; background: #DBEAFE; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1.1rem;">
                        SYSTEM 1<br><small style="font-weight:normal;">Fast, Automatic, Unconscious</small>
                    </button>
                    <button id="sys2-btn" style="flex: 1; min-width: 200px; padding: 1rem; border: 2px solid #ccc; background: #fff; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1.1rem;">
                        SYSTEM 2<br><small style="font-weight:normal;">Slow, Deliberate, Conscious</small>
                    </button>
                </div>
                
                <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; min-height: 120px;">
                    <h4 id="dual-scenario" style="margin-top: 0; color: #1F2937;">Scenario: Standard Daily Commute</h4>
                    <p id="dual-desc">You are driving your usual route to work. Traffic is normal.</p>
                    <div id="dual-action" style="margin-top: 1rem; padding: 0.5rem; background: #f9f9f9; border-left: 4px solid #3B82F6;">
                        <strong>Action:</strong> Steering, maintaining speed, and changing lanes happen automatically while you listen to a podcast.
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const btn1 = this.querySelector('#sys1-btn');
            const btn2 = this.querySelector('#sys2-btn');
            const scen = this.querySelector('#dual-scenario');
            const desc = this.querySelector('#dual-desc');
            const action = this.querySelector('#dual-action');

            if (btn1 && btn2) {
                btn1.addEventListener('click', () => {
                    btn1.style.background = '#DBEAFE';
                    btn1.style.borderColor = '#3B82F6';
                    btn2.style.background = '#fff';
                    btn2.style.borderColor = '#ccc';
                    
                    scen.textContent = "Scenario: Standard Daily Commute";
                    desc.textContent = "You are driving your usual route to work. Traffic is normal.";
                    action.innerHTML = "<strong>Action:</strong> Steering, maintaining speed, and changing lanes happen automatically while you listen to a podcast.";
                    action.style.borderLeftColor = "#3B82F6";
                });
                
                btn2.addEventListener('click', () => {
                    btn2.style.background = '#FEF08A';
                    btn2.style.borderColor = '#EAB308';
                    btn1.style.background = '#fff';
                    btn1.style.borderColor = '#ccc';
                    
                    scen.textContent = "Scenario: Road Closure Ahead";
                    desc.textContent = "A police car blocks the road. You must find an alternate route through unfamiliar side streets.";
                    action.innerHTML = "<strong>Action:</strong> Podcast is paused. You turn off the radio, sit up straight, and consciously calculate the best detour using mental maps and road signs. High cognitive load.";
                    action.style.borderLeftColor = "#EAB308";
                });
            }
        }, 0);
    }
}
customElements.define('hbm-dual-widget', HBMDualWidget);

// -------------------------------------------------------------------------
// 20. hbm-20: COM-B Model
// -------------------------------------------------------------------------
class HBMCombWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">The COM-B Model: Unlocking E-Bike Adoption</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Behavior requires all three components. Toggle them to see if the user adopts the e-bike.</p>
                
                <div style="display: flex; gap: 1rem; justify-content: center; margin: 2rem 0; flex-wrap: wrap;">
                    <div class="comb-node" data-node="c" style="flex: 1; min-width: 150px; padding: 1rem; background: #fff; border: 2px solid #ccc; border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.3s; opacity: 0.5;">
                        <h4 style="margin: 0;">Capability</h4>
                        <small>"I know how to ride safely."</small>
                    </div>
                    <div class="comb-node" data-node="o" style="flex: 1; min-width: 150px; padding: 1rem; background: #fff; border: 2px solid #ccc; border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.3s; opacity: 0.5;">
                        <h4 style="margin: 0;">Opportunity</h4>
                        <small>"I have secure parking."</small>
                    </div>
                    <div class="comb-node" data-node="m" style="flex: 1; min-width: 150px; padding: 1rem; background: #fff; border: 2px solid #ccc; border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.3s; opacity: 0.5;">
                        <h4 style="margin: 0;">Motivation</h4>
                        <small>"I want to exercise."</small>
                    </div>
                </div>
                
                <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                    <h2 id="comb-result" style="margin: 0; color: #DC2626;">No Behavior (E-bike sits in store)</h2>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const nodes = this.querySelectorAll('.comb-node');
            const result = this.querySelector('#comb-result');
            
            const state = { c: false, o: false, m: false };

            if (nodes && result) {
                nodes.forEach(node => {
                    node.addEventListener('click', () => {
                        const id = node.getAttribute('data-node');
                        state[id] = !state[id];
                        
                        if (state[id]) {
                            node.style.opacity = '1';
                            node.style.borderColor = '#10B981';
                            node.style.background = '#D1FAE5';
                        } else {
                            node.style.opacity = '0.5';
                            node.style.borderColor = '#ccc';
                            node.style.background = '#fff';
                        }
                        
                        if (state.c && state.o && state.m) {
                            result.textContent = "Behavior Achieved: User Buys & Rides E-Bike!";
                            result.style.color = "#10B981";
                        } else {
                            result.textContent = "No Behavior (E-bike sits in store)";
                            result.style.color = "#DC2626";
                        }
                    });
                });
            }
        }, 0);
    }
}
customElements.define('hbm-comb-widget', HBMCombWidget);

// -------------------------------------------------------------------------
// 21. hbm-21: Behaviour Change Wheel
// -------------------------------------------------------------------------
class HBMBcwWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">The Behaviour Change Wheel</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Select a core COM-B deficit to see corresponding intervention functions and policy categories.</p>
                
                <div style="display: flex; gap: 0.5rem; justify-content: center; margin: 1.5rem 0; flex-wrap: wrap;">
                    <button class="bcw-btn" data-type="c" style="padding: 0.5rem 1rem; border: 2px solid #10B981; background: #fff; border-radius: 4px; cursor: pointer; font-weight: bold;">Capability Deficit</button>
                    <button class="bcw-btn" data-type="o" style="padding: 0.5rem 1rem; border: 2px solid #3B82F6; background: #fff; border-radius: 4px; cursor: pointer; font-weight: bold;">Opportunity Deficit</button>
                    <button class="bcw-btn" data-type="m" style="padding: 0.5rem 1rem; border: 2px solid #8B5CF6; background: #fff; border-radius: 4px; cursor: pointer; font-weight: bold;">Motivation Deficit</button>
                </div>
                
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 200px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#EF4444;">1. Source of Behavior (COM-B)</h4>
                        <p id="bcw-source" style="font-size: 0.9rem;">Select a button above.</p>
                    </div>
                    <div style="flex: 1; min-width: 200px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#F59E0B;">2. Intervention Functions</h4>
                        <ul id="bcw-interventions" style="font-size: 0.9rem; padding-left: 1.2rem; margin: 0;">
                            <li>Select above.</li>
                        </ul>
                    </div>
                    <div style="flex: 1; min-width: 200px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#10B981;">3. Policy Categories</h4>
                        <ul id="bcw-policies" style="font-size: 0.9rem; padding-left: 1.2rem; margin: 0;">
                            <li>Select above.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const btns = this.querySelectorAll('.bcw-btn');
            const source = this.querySelector('#bcw-source');
            const intv = this.querySelector('#bcw-interventions');
            const pol = this.querySelector('#bcw-policies');

            const data = {
                c: { s: "Capability (Physical or Psychological) is lacking. E.g., user doesn't know how to navigate the transit app.", i: ["Education (increasing knowledge)", "Training (imparting skills)", "Enablement (reducing barriers)"], p: ["Guidelines", "Service Provision", "Communication/Marketing"] },
                o: { s: "Opportunity (Physical or Social) is lacking. E.g., bus doesn't run late at night.", i: ["Environmental Restructuring (changing context)", "Restriction (rules)", "Enablement (providing support)"], p: ["Environmental/Social Planning", "Regulation", "Service Provision"] },
                m: { s: "Motivation (Reflective or Automatic) is lacking. E.g., user prefers the status of driving.", i: ["Persuasion (inducing feelings)", "Incentivisation (reward expectation)", "Coercion (punishment expectation)", "Modeling (providing an example)"], p: ["Communication/Marketing", "Legislation", "Fiscal Measures"] }
            };

            if (btns) {
                btns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        btns.forEach(b => b.style.background = '#fff');
                        btn.style.background = '#FEF08A';
                        
                        const t = btn.getAttribute('data-type');
                        source.textContent = data[t].s;
                        intv.innerHTML = data[t].i.map(x => \`<li>\${x}</li>\`).join('');
                        pol.innerHTML = data[t].p.map(x => \`<li>\${x}</li>\`).join('');
                    });
                });
            }
        }, 0);
    }
}
customElements.define('hbm-bcw-widget', HBMBcwWidget);

// -------------------------------------------------------------------------
// 22. hbm-22: Theoretical Domains Framework
// -------------------------------------------------------------------------
class HBMTdfWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Theoretical Domains Framework (TDF)</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Hover over a domain to see how it applies to transit use.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.5rem; margin-bottom: 1.5rem;">
                    <div class="tdf-dom" data-desc="Knowledge: Does the user know the bus routes and schedules?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Knowledge</div>
                    <div class="tdf-dom" data-desc="Skills: Can they physically board the bus and handle payment?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Skills</div>
                    <div class="tdf-dom" data-desc="Social/Prof Role: Does riding the bus fit their identity as a professional?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Social/Prof Role</div>
                    <div class="tdf-dom" data-desc="Beliefs about Capabilities: Do they feel confident navigating transit?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Beliefs about Capabilities</div>
                    <div class="tdf-dom" data-desc="Optimism: Do they expect the bus to be on time?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Optimism</div>
                    <div class="tdf-dom" data-desc="Beliefs about Consequences: Do they think it will save them money?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Beliefs about Consequences</div>
                    <div class="tdf-dom" data-desc="Reinforcement: Do they get rewarded (e.g., employer subsidy)?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Reinforcement</div>
                    <div class="tdf-dom" data-desc="Intentions: Have they made a conscious decision to ride?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Intentions</div>
                    <div class="tdf-dom" data-desc="Goals: Does it align with their goal of reading more books?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Goals</div>
                    <div class="tdf-dom" data-desc="Memory/Attention/Decision: Is the transit map easy to interpret quickly?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Memory/Attention/Decision</div>
                    <div class="tdf-dom" data-desc="Env. Context/Resources: Is the bus stop close to their house?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Env. Context/Resources</div>
                    <div class="tdf-dom" data-desc="Social Influences: Do their neighbors ride the bus?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Social Influences</div>
                    <div class="tdf-dom" data-desc="Emotion: Does transit make them feel anxious or relaxed?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Emotion</div>
                    <div class="tdf-dom" data-desc="Behavioral Regulation: Do they have a plan for what to do if it rains?" style="background:#fff; padding:0.5rem; border:1px solid #ccc; border-radius:4px; text-align:center; font-size:0.8rem; cursor:help;">Behavioral Regulation</div>
                </div>
                
                <div style="background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc; text-align: center; min-height: 40px; font-weight: bold; color: #1F2937;" id="tdf-display">
                    Hover over a domain to see details.
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const doms = this.querySelectorAll('.tdf-dom');
            const disp = this.querySelector('#tdf-display');

            if (doms && disp) {
                doms.forEach(dom => {
                    dom.addEventListener('mouseenter', () => {
                        dom.style.background = '#DBEAFE';
                        disp.textContent = dom.getAttribute('data-desc');
                    });
                    dom.addEventListener('mouseleave', () => {
                        dom.style.background = '#fff';
                        disp.textContent = "Hover over a domain to see details.";
                    });
                });
            }
        }, 0);
    }
}
customElements.define('hbm-tdf-widget', HBMTdfWidget);

// -------------------------------------------------------------------------
// 23. hbm-23: Nudge and Choice Architecture
// -------------------------------------------------------------------------
class HBMNudgeWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Nudge: The Power of Defaults</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">An employer offers a pre-tax transit pass. Compare the results of two different choice architectures.</p>
                
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
                        <h4 style="margin-top:0; color:#EF4444;">Opt-In (Status Quo)</h4>
                        <p style="font-size: 0.8rem;">Employees must actively sign a form to join the program.</p>
                        <div style="margin: 1.5rem 0; font-size: 2.5rem; color: #EF4444; font-weight: bold;">
                            15%
                        </div>
                        <p style="font-size: 0.8rem; color: #666;">Participation Rate</p>
                        <button class="nudge-btn" data-type="optin" style="padding: 0.5rem 1rem; background: #eee; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">Why so low?</button>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1.5rem; border-radius: 8px; border: 2px solid #10B981; text-align: center;">
                        <h4 style="margin-top:0; color:#10B981;">Opt-Out (Nudge)</h4>
                        <p style="font-size: 0.8rem;">Employees are automatically enrolled unless they sign a form to decline.</p>
                        <div style="margin: 1.5rem 0; font-size: 2.5rem; color: #10B981; font-weight: bold;">
                            82%
                        </div>
                        <p style="font-size: 0.8rem; color: #666;">Participation Rate</p>
                        <button class="nudge-btn" data-type="optout" style="padding: 0.5rem 1rem; background: #eee; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">Why so high?</button>
                    </div>
                </div>
                
                <div id="nudge-exp" style="margin-top: 1.5rem; padding: 1rem; background: #fff; border-radius: 8px; border: 1px solid #ccc; min-height: 60px; font-weight: bold; text-align: center; color: #1F2937;">
                    Click a button above to see the explanation.
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const btns = this.querySelectorAll('.nudge-btn');
            const exp = this.querySelector('#nudge-exp');

            if (btns && exp) {
                btns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const t = btn.getAttribute('data-type');
                        if (t === 'optin') {
                            exp.innerHTML = "<span style='color:#EF4444'>Status Quo Bias & Friction:</span> People are lazy and busy. Even if they want the pass, the minor effort of finding the form, filling it out, and submitting it is enough to stop them from acting.";
                        } else {
                            exp.innerHTML = "<span style='color:#10B981'>Status Quo Bias & Friction:</span> The exact same biases are harnessed for good. Doing nothing now results in enrollment. The friction works <em>for</em> the policy instead of against it.";
                        }
                    });
                });
            }
        }, 0);
    }
}
customElements.define('hbm-nudge-widget', HBMNudgeWidget);

// -------------------------------------------------------------------------
// 24. hbm-24: Agent-Based Modeling
// -------------------------------------------------------------------------
class HBMAbmWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Agent-Based Modeling: Social Influence</h3>
                <p style="font-size: 0.9rem; color: #555;">Agents (squares) adopt an EV (green) if enough of their neighbors adopt. Click 'Step' to run the simulation.</p>
                
                <div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; margin-top: 1.5rem;">
                    <div id="abm-grid" style="display: grid; grid-template-columns: repeat(10, 20px); gap: 2px; background: #ccc; padding: 2px; border-radius: 4px;">
                        <!-- Grid cells will be injected here -->
                    </div>
                    
                    <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; min-width: 200px; text-align: left;">
                        <h4 style="margin-top: 0;">Controls</h4>
                        <button id="abm-step" style="padding: 0.5rem 1rem; width: 100%; margin-bottom: 0.5rem; background: #3B82F6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Step Forward</button>
                        <button id="abm-reset" style="padding: 0.5rem 1rem; width: 100%; background: #eee; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">Reset Grid</button>
                        
                        <div style="margin-top: 1rem; font-size: 0.9rem;">
                            <strong>EV Adopters:</strong> <span id="abm-count">5</span> / 100<br>
                            <strong>Threshold:</strong> 2 neighbors
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const gridEl = this.querySelector('#abm-grid');
            const stepBtn = this.querySelector('#abm-step');
            const resetBtn = this.querySelector('#abm-reset');
            const countEl = this.querySelector('#abm-count');
            
            if(!gridEl) return;
            
            const SIZE = 10;
            let grid = [];
            
            const init = () => {
                gridEl.innerHTML = '';
                grid = [];
                for(let i=0; i<SIZE; i++) {
                    let row = [];
                    for(let j=0; j<SIZE; j++) {
                        // Start with ~5% random adopters
                        let state = Math.random() < 0.05 ? 1 : 0;
                        row.push(state);
                        
                        let cell = document.createElement('div');
                        cell.style.width = '20px';
                        cell.style.height = '20px';
                        cell.style.background = state ? '#10B981' : '#fff';
                        cell.id = \`cell-\${i}-\${j}\`;
                        gridEl.appendChild(cell);
                    }
                    grid.push(row);
                }
                updateCount();
            };
            
            const updateCount = () => {
                let c = 0;
                for(let i=0; i<SIZE; i++) {
                    for(let j=0; j<SIZE; j++) {
                        if(grid[i][j]) c++;
                    }
                }
                countEl.textContent = c;
            };
            
            const step = () => {
                let next = JSON.parse(JSON.stringify(grid));
                for(let i=0; i<SIZE; i++) {
                    for(let j=0; j<SIZE; j++) {
                        if(grid[i][j] === 0) {
                            // count neighbors
                            let n = 0;
                            for(let di=-1; di<=1; di++) {
                                for(let dj=-1; dj<=1; dj++) {
                                    if(di===0 && dj===0) continue;
                                    let ni = i+di;
                                    let nj = j+dj;
                                    if(ni>=0 && ni<SIZE && nj>=0 && nj<SIZE) {
                                        n += grid[ni][nj];
                                    }
                                }
                            }
                            if(n >= 2) {
                                next[i][j] = 1;
                            }
                        }
                    }
                }
                
                grid = next;
                for(let i=0; i<SIZE; i++) {
                    for(let j=0; j<SIZE; j++) {
                        document.getElementById(\`cell-\${i}-\${j}\`).style.background = grid[i][j] ? '#10B981' : '#fff';
                    }
                }
                updateCount();
            };
            
            stepBtn.addEventListener('click', step);
            resetBtn.addEventListener('click', init);
            init();
        }, 0);
    }
}
customElements.define('hbm-abm-widget', HBMAbmWidget);

// -------------------------------------------------------------------------
// 25. hbm-25: Activity-Based Travel Models
// -------------------------------------------------------------------------
class HBMActivityWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Activity-Based Model vs Trip-Based</h3>
                <p style="text-align: center; font-size: 0.9rem; color: #555;">Toggle to see the difference in how travel behavior is conceptualized.</p>
                
                <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1.5rem;">
                    <button class="act-toggle" data-view="trip" style="padding: 0.5rem 1rem; border: 2px solid #ccc; background: #fff; border-radius: 4px; cursor: pointer; font-weight: bold;">Trip-Based</button>
                    <button class="act-toggle" data-view="activity" style="padding: 0.5rem 1rem; border: 2px solid #3B82F6; background: #DBEAFE; border-radius: 4px; cursor: pointer; font-weight: bold;">Activity-Based</button>
                </div>
                
                <div id="act-content" style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ccc; min-height: 150px;">
                    <!-- content injected here -->
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const btns = this.querySelectorAll('.act-toggle');
            const content = this.querySelector('#act-content');
            if(!btns || !content) return;
            
            const tripHTML = \`
                <h4 style="color: #6B7280; margin-top:0;">Isolated Trips</h4>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="padding: 0.5rem; border: 1px solid #ccc; background: #f9f9f9;">Trip 1: Home → Work (Purpose: HBW)</div>
                    <div style="padding: 0.5rem; border: 1px solid #ccc; background: #f9f9f9;">Trip 2: Work → Shop (Purpose: NHB)</div>
                    <div style="padding: 0.5rem; border: 1px solid #ccc; background: #f9f9f9;">Trip 3: Shop → Home (Purpose: HBO)</div>
                </div>
                <p style="font-size: 0.8rem; color: #666; margin-top: 1rem;">Limitation: Treats trips as independent. Ignores that taking the bus to work means you can't drive from work to the shop.</p>
            \`;
            
            const actHTML = \`
                <h4 style="color: #3B82F6; margin-top:0;">Continuous Tour</h4>
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                    <div style="padding: 1rem; background: #DBEAFE; border: 1px solid #3B82F6; border-radius: 8px; text-align: center;">Home<br><small>7am - 8am</small></div>
                    <span style="color:#ccc;">→</span>
                    <div style="padding: 1rem; background: #FEF08A; border: 1px solid #EAB308; border-radius: 8px; text-align: center;">Work<br><small>8:30am - 5pm</small></div>
                    <span style="color:#ccc;">→</span>
                    <div style="padding: 1rem; background: #D1FAE5; border: 1px solid #10B981; border-radius: 8px; text-align: center;">Shop<br><small>5:15pm - 6pm</small></div>
                    <span style="color:#ccc;">→</span>
                    <div style="padding: 1rem; background: #DBEAFE; border: 1px solid #3B82F6; border-radius: 8px; text-align: center;">Home<br><small>6:30pm+</small></div>
                </div>
                <p style="font-size: 0.8rem; color: #666; margin-top: 1rem;">Advantage: Captures time constraints and trip chaining. The mode chosen for the whole tour must accommodate the shopping stop.</p>
            \`;

            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    btns.forEach(b => {
                        b.style.background = '#fff';
                        b.style.borderColor = '#ccc';
                    });
                    btn.style.background = '#DBEAFE';
                    btn.style.borderColor = '#3B82F6';
                    
                    if(btn.getAttribute('data-view') === 'trip') {
                        content.innerHTML = tripHTML;
                    } else {
                        content.innerHTML = actHTML;
                    }
                });
            });
            
            content.innerHTML = actHTML;
        }, 0);
    }
}
customElements.define('hbm-activity-widget', HBMActivityWidget);

// -------------------------------------------------------------------------
// 26. hbm-26: System Dynamics
// -------------------------------------------------------------------------
class HBMSdWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">System Dynamics: Induced Demand</h3>
                <p style="font-size: 0.9rem; color: #555;">Adding road capacity temporarily reduces congestion, but lower travel times induce more driving, filling up the road again.</p>
                
                <div style="margin: 2rem 0; display: flex; justify-content: center; gap: 2rem;">
                    <div style="flex:1; max-width: 200px;">
                        <h4 style="margin-top: 0;">Road Capacity</h4>
                        <input type="range" id="sd-cap" min="100" max="300" value="100" style="width: 100%; accent-color: #3B82F6;">
                        <div id="sd-cap-val" style="font-weight: bold; color: #3B82F6;">100 units</div>
                    </div>
                    
                    <div style="flex:1; max-width: 200px;">
                        <h4 style="margin-top: 0;">Traffic Volume</h4>
                        <div style="height: 20px; background: #eee; border-radius: 10px; overflow: hidden; margin-top: 0.5rem;">
                            <div id="sd-vol-bar" style="height: 100%; width: 95%; background: #EF4444; transition: width 1s ease-in-out;"></div>
                        </div>
                        <div id="sd-vol-val" style="font-weight: bold; color: #EF4444; margin-top: 0.5rem;">95 vehicles</div>
                    </div>
                </div>
                
                <div id="sd-status" style="background: #FEE2E2; padding: 1rem; border-radius: 8px; border: 1px solid #EF4444; color: #991B1B; font-weight: bold;">
                    Status: Highly Congested (Demand equals Capacity)
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const capInput = this.querySelector('#sd-cap');
            const capVal = this.querySelector('#sd-cap-val');
            const volBar = this.querySelector('#sd-vol-bar');
            const volVal = this.querySelector('#sd-vol-val');
            const status = this.querySelector('#sd-status');
            
            if(!capInput) return;
            
            let volume = 95;
            
            capInput.addEventListener('change', () => {
                const capacity = parseInt(capInput.value);
                capVal.textContent = capacity + " units";
                
                // Immediate effect: congestion drops
                status.style.background = '#D1FAE5';
                status.style.borderColor = '#10B981';
                status.style.color = '#065F46';
                status.textContent = "Status: Flowing Freely! (Travel time drops)";
                
                let ratio = volume / capacity;
                volBar.style.width = (ratio * 100) + '%';
                volBar.style.background = '#10B981';
                
                // Induced demand: volume slowly grows to meet capacity
                setTimeout(() => {
                    volume = capacity * 0.95; // fills up to 95%
                    volVal.textContent = Math.round(volume) + " vehicles";
                    volBar.style.width = '95%';
                    volBar.style.background = '#EF4444';
                    
                    status.style.background = '#FEE2E2';
                    status.style.borderColor = '#EF4444';
                    status.style.color = '#991B1B';
                    status.textContent = "Status: Highly Congested Again! (Induced Demand)";
                }, 2000); // 2 second delay to simulate years passing
            });
        }, 0);
    }
}
customElements.define('hbm-sd-widget', HBMSdWidget);

// -------------------------------------------------------------------------
// 27. hbm-27: Hybrid Choice Models
// -------------------------------------------------------------------------
class HBMHcmWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #D97706; text-align: center;">Hybrid Choice Model: Latent Variables</h3>
                
                <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
                    <div style="padding: 1rem; background: #fff; border: 1px dashed #666; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; text-align: center; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);">
                        <strong>Latent Variable</strong><br><small>Environmental Concern</small>
                    </div>
                    
                    <span style="font-size: 2rem; color: #666;">→</span>
                    
                    <div style="padding: 1rem; background: #DBEAFE; border: 2px solid #3B82F6; border-radius: 8px; text-align: center;">
                        <strong>Utility Function</strong><br>
                        <small>U(Transit) = β·Time + γ·(Env Concern)</small>
                    </div>
                    
                    <span style="font-size: 2rem; color: #666;">→</span>
                    
                    <div style="padding: 1rem; background: #D1FAE5; border: 2px solid #10B981; border-radius: 8px; text-align: center;">
                        <strong>Choice</strong><br>
                        <small>Takes Bus</small>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('hbm-hcm-widget', HBMHcmWidget);

// -------------------------------------------------------------------------
// 28. hbm-28: Machine Learning for Behavior
// -------------------------------------------------------------------------
class HBMMlWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Machine Learning vs. Discrete Choice</h3>
                <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem;">
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#3B82F6;">Random Forest (ML)</h4>
                        <p style="font-size: 0.9rem; text-align:left;"><strong>Goal:</strong> Maximize predictive accuracy.</p>
                        <p style="font-size: 0.9rem; text-align:left;"><strong>Output:</strong> Feature Importance (Gini)</p>
                        <ul style="font-size: 0.8rem; text-align:left; color:#666;">
                            <li>Distance: 0.45</li>
                            <li>Income: 0.22</li>
                            <li>Age: 0.15</li>
                        </ul>
                        <p style="font-size: 0.8rem; text-align:left; color:#EF4444; font-weight:bold;">Cannot estimate Willingness to Pay (WTP).</p>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid #ccc;">
                        <h4 style="margin-top:0; color:#10B981;">Logit Model (Econometrics)</h4>
                        <p style="font-size: 0.9rem; text-align:left;"><strong>Goal:</strong> Causal inference and policy simulation.</p>
                        <p style="font-size: 0.9rem; text-align:left;"><strong>Output:</strong> Beta Coefficients</p>
                        <ul style="font-size: 0.8rem; text-align:left; color:#666;">
                            <li>Cost: -0.5 (p<0.01)</li>
                            <li>Time: -0.2 (p<0.01)</li>
                        </ul>
                        <p style="font-size: 0.8rem; text-align:left; color:#10B981; font-weight:bold;">WTP = (-0.2) / (-0.5) = $0.40/min</p>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('hbm-ml-widget', HBMMlWidget);

// -------------------------------------------------------------------------
// 29. hbm-29: Integrating Theory and Data
// -------------------------------------------------------------------------
class HBMIntegrationWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">The Modern Modeling Pipeline</h3>
                
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
                    <div style="background:#DBEAFE; border:2px solid #3B82F6; padding:1rem; border-radius:8px;"><strong>Big Data</strong><br><small>GPS, Smartcards</small></div>
                    <span style="font-size:1.5rem; color:#666;">+</span>
                    <div style="background:#FEF08A; border:2px solid #EAB308; padding:1rem; border-radius:8px;"><strong>Psychology</strong><br><small>Attitudes, Habits</small></div>
                    <span style="font-size:1.5rem; color:#666;">↓</span>
                    <div style="background:#D1FAE5; border:2px solid #10B981; padding:1rem; border-radius:8px; font-weight:bold;">Hybrid ML-Choice Model</div>
                    <span style="font-size:1.5rem; color:#666;">↓</span>
                    <div style="background:#FEE2E2; border:2px solid #EF4444; padding:1rem; border-radius:8px;"><strong>Agent-Based Sim</strong><br><small>Emergent Impacts</small></div>
                </div>
            </div>
        `;
    }
}
customElements.define('hbm-integration-widget', HBMIntegrationWidget);

// -------------------------------------------------------------------------
// 30. hbm-30: Final Synthesis
// -------------------------------------------------------------------------
class HBMSynthesisWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="border: 2px solid #D97706; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; background: #FFFBEB; font-family: sans-serif; text-align: center;">
                <h3 style="margin-top: 0; color: #D97706;">Map of Human Behavior Models</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
                    <div style="background:#fff; border:1px solid #3B82F6; border-top:4px solid #3B82F6; padding:1rem; border-radius:4px; text-align:left;">
                        <h4 style="margin-top:0; color:#1E3A8A;">Rational Actor</h4>
                        <ul style="font-size:0.8rem; padding-left:1.2rem; color:#555;">
                            <li>Discrete Choice</li>
                            <li>Expected Utility</li>
                            <li>Activity-Based</li>
                        </ul>
                    </div>
                    <div style="background:#fff; border:1px solid #10B981; border-top:4px solid #10B981; padding:1rem; border-radius:4px; text-align:left;">
                        <h4 style="margin-top:0; color:#065F46;">Psychological</h4>
                        <ul style="font-size:0.8rem; padding-left:1.2rem; color:#555;">
                            <li>TPB / KAP</li>
                            <li>COM-B / BCW</li>
                            <li>Prospect Theory</li>
                        </ul>
                    </div>
                    <div style="background:#fff; border:1px solid #8B5CF6; border-top:4px solid #8B5CF6; padding:1rem; border-radius:4px; text-align:left;">
                        <h4 style="margin-top:0; color:#4C1D95;">Sociological</h4>
                        <ul style="font-size:0.8rem; padding-left:1.2rem; color:#555;">
                            <li>Social Practice Theory</li>
                            <li>Diffusion of Innovations</li>
                            <li>Norm Activation (NAM)</li>
                        </ul>
                    </div>
                    <div style="background:#fff; border:1px solid #EF4444; border-top:4px solid #EF4444; padding:1rem; border-radius:4px; text-align:left;">
                        <h4 style="margin-top:0; color:#991B1B;">Systemic</h4>
                        <ul style="font-size:0.8rem; padding-left:1.2rem; color:#555;">
                            <li>Agent-Based Models</li>
                            <li>System Dynamics</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('hbm-synthesis-widget', HBMSynthesisWidget);
