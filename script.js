document.addEventListener('DOMContentLoaded', () => {
    // Element references
    const startConfessionBtn = document.getElementById('start-confession-btn');
    const homeView = document.getElementById('home-view');
    const helpView = document.getElementById('help-view');
    
    // Event listeners for the home page buttons
    if (startConfessionBtn) {
        startConfessionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Handle directly in JavaScript instead of relying on URL parameters
            // This ensures it works even if URL parameters aren't processed correctly
            
            // Create the confession view if not already created
            if (!document.getElementById('confession-view')) {
                const confessionView = document.createElement('section');
                confessionView.id = 'confession-view';
                confessionView.className = 'confession-view';
                confessionView.innerHTML = `
                    <div class="confession-header">
                        <h1 class="confession-title">分享你的故事</h1>
                        <p class="confession-subtitle">在这里安全地倾诉，我们会认真倾听</p>
                    </div>
                    <div class="confession-form">
                        <textarea placeholder="写下你的心事、困惑或者需要的帮助..."></textarea>
                        <div class="tag-selector">
                            <p>添加标签（可选）：</p>
                            <div class="tags">
                                <span class="tag">压力</span>
                                <span class="tag">焦虑</span>
                                <span class="tag">失眠</span>
                                <span class="tag">感情</span>
                                <span class="tag">工作</span>
                                <span class="tag">学业</span>
                            </div>
                        </div>
                        <button class="submit-confession-btn">
                            <i class="fas fa-paper-plane"></i> 发送
                        </button>
                    </div>`;
                
                // Insert the confession view after the home view
                homeView.parentNode.insertBefore(confessionView, homeView.nextSibling);
                
                // Add event listener to the submit button
                const submitConfessionBtn = document.querySelector('.submit-confession-btn');
                if (submitConfessionBtn) {
                    submitConfessionBtn.addEventListener('click', () => {
                        const confessionText = document.querySelector('.confession-form textarea').value.trim();
                        if (confessionText) {
                            alert('感谢你的分享！我们会尽快给予回应。');
                            // In a real app, this would send the confession to a server
                            window.location.href = './';
                        } else {
                            alert('请先写下你的心事。');
                        }
                    });
                }
                
                // Add event listeners for tag selection
                const tags = document.querySelectorAll('.tag');
                if (tags.length > 0) {
                    tags.forEach(tag => {
                        tag.addEventListener('click', () => {
                            tag.classList.toggle('selected');
                        });
                    });
                }
            }
            
            // Hide home view and show confession view
            homeView.classList.add('hidden');
            document.getElementById('confession-view').classList.remove('hidden');
            
            // Update the URL without refreshing the page to help with navigation
            history.pushState({}, '', 'index.html?view=confession');
        });
    }
    
    // Help page specific functionality
    const replyTextarea = document.querySelector('.reply-area textarea');
    const submitReplyBtn = document.querySelector('.submit-reply-btn');
    const emojiButtons = document.querySelectorAll('.emoji-btn');
    
    if (replyTextarea && submitReplyBtn) {
        // Adding placeholder emojis on emoji button clicks
        emojiButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const emoji = btn.querySelector('i').classList.contains('fa-heart') ? '❤️' :
                              btn.querySelector('i').classList.contains('fa-smile') ? '😊' :
                              btn.querySelector('i').classList.contains('fa-smile-beam') ? '😁' :
                              btn.querySelector('i').classList.contains('fa-grin') ? '😄' : '⭐';
                
                replyTextarea.value += ` ${emoji} `;
                replyTextarea.focus();
            });
        });
        
        // Handle reply submission
        submitReplyBtn.addEventListener('click', () => {
            const replyText = replyTextarea.value.trim();
            
            if (replyText) {
                // In a real app, this would send the reply to a server
                alert('感谢你的回应！你的温暖将传递给需要帮助的人。');
                replyTextarea.value = '';
                
                // Simulate success by updating the stats (in a real app, this would be done after server confirmation)
                updateHelperStats();
            } else {
                alert('请先写下你的建议和鼓励。');
            }
        });
    }
    
    // Function to update the helper stats
    function updateHelperStats() {
        const todayHelped = document.querySelector('.help-stats .stat-item:nth-child(1)');
        if (todayHelped) {
            const currentCount = parseInt(todayHelped.textContent.match(/\d+/)[0]);
            todayHelped.innerHTML = `<i class="fas fa-heart"></i> 今日已帮助: ${currentCount + 1}人`;
        }
        
        const totalHelped = document.querySelector('.help-stats .stat-item:nth-child(2)');
        if (totalHelped) {
            const currentCount = parseInt(totalHelped.textContent.match(/\d+/)[0]);
            totalHelped.innerHTML = `<i class="fas fa-users"></i> 累计帮助: ${currentCount + 1}人`;
        }
    }
    
    // Handle URL parameters to potentially show different views
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get('view');
    
    // This would be used if we want to control views with URL parameters
    if (view === 'help' && homeView && helpView) {
        homeView.classList.add('hidden');
        helpView.classList.remove('hidden');
    } else if (view === 'confession' && homeView && !document.getElementById('confession-view')) {
        // If we're loading the page with the confession view parameter,
        // trigger the button click to handle the view creation and display
        if (startConfessionBtn) {
            startConfessionBtn.click();
        }
    }
}); 