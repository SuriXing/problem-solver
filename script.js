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
                        <h1 class="confession-title">向杂货铺老板倾诉</h1>
                        <p class="confession-subtitle">在这里分享你的困扰，收到回复时将通知你</p>
                    </div>
                    <div class="confession-form">
                        <div class="confession-image">
                            <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="信件">
                        </div>
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
                        <div class="confession-options">
                            <div class="privacy-options">
                                <p>隐私设置：</p>
                                <div class="radio-options">
                                    <label class="radio-label">
                                        <input type="radio" name="privacy" value="public" checked>
                                        <span class="radio-custom"></span>
                                        <span>公开提问 (可被大家回答)</span>
                                    </label>
                                    <label class="radio-label">
                                        <input type="radio" name="privacy" value="private">
                                        <span class="radio-custom"></span>
                                        <span>私密提问 (仅管理员可见)</span>
                                    </label>
                                </div>
                            </div>
                            <div class="notification-option">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="email-notification">
                                    <span class="checkbox-custom"></span>
                                    <span>有回复时通过邮件通知我</span>
                                </label>
                                <div class="email-input-container" style="display: none;">
                                    <input type="email" placeholder="请输入你的邮箱" class="email-input">
                                </div>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button class="submit-confession-btn">
                                <i class="fas fa-paper-plane"></i> 发送
                            </button>
                        </div>
                    </div>`;
                
                // Insert the confession view after the home view
                homeView.parentNode.insertBefore(confessionView, homeView.nextSibling);
                
                // Add event listener to the submit button
                const submitConfessionBtn = document.querySelector('.submit-confession-btn');
                if (submitConfessionBtn) {
                    submitConfessionBtn.addEventListener('click', () => {
                        const confessionText = document.querySelector('.confession-form textarea').value.trim();
                        const emailNotification = document.getElementById('email-notification').checked;
                        const emailInput = document.querySelector('.email-input');
                        let validSubmission = true;
                        
                        if (!confessionText) {
                            alert('请先写下你的心事。');
                            validSubmission = false;
                        }
                        
                        if (emailNotification && emailInput && !emailInput.value.trim()) {
                            alert('请填写你的邮箱地址以接收通知。');
                            validSubmission = false;
                        }
                        
                        if (validSubmission) {
                            // Collect form data for submission
                            const privacyOption = document.querySelector('input[name="privacy"]:checked').value;
                            const selectedTags = Array.from(document.querySelectorAll('.tag.selected')).map(tag => tag.textContent);
                            const emailAddress = emailNotification && emailInput ? emailInput.value.trim() : '';
                            
                            // In a real app, this would send the data to a server
                            console.log({
                                confessionText,
                                privacyOption,
                                selectedTags,
                                emailNotification,
                                emailAddress
                            });
                            
                            alert('感谢你的分享！我们会尽快给予回应。');
                            window.location.href = './';
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
                
                // Add event listener for email notification checkbox
                const emailNotificationCheckbox = document.getElementById('email-notification');
                const emailInputContainer = document.querySelector('.email-input-container');
                
                if (emailNotificationCheckbox && emailInputContainer) {
                    emailNotificationCheckbox.addEventListener('change', () => {
                        emailInputContainer.style.display = emailNotificationCheckbox.checked ? 'block' : 'none';
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