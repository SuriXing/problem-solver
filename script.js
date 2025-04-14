document.addEventListener('DOMContentLoaded', () => {
    // Element references
    const startConfessionBtn = document.getElementById('start-confession-btn');
    const homeView = document.getElementById('home-view');
    const helpView = document.getElementById('help-view');
    
    // Helper function to get translations
    function t(key) {
        return window.i18n ? window.i18n.t(key) : key;
    }
    
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
                        <h1 class="confession-title" data-i18n="confessionTitle">${t('confessionTitle')}</h1>
                        <p class="confession-subtitle" data-i18n="confessionSubtitle">${t('confessionSubtitle')}</p>
                    </div>
                    <div class="confession-form">
                        <div class="confession-image">
                            <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="信件">
                        </div>
                        <textarea placeholder="${t('confessionPlaceholder')}" data-i18n="confessionPlaceholder"></textarea>
                        <div class="tag-selector">
                            <p data-i18n="addTags">${t('addTags')}</p>
                            <div class="tags">
                                <span class="tag" data-i18n="tagPressure">${t('tagPressure')}</span>
                                <span class="tag" data-i18n="tagAnxiety">${t('tagAnxiety')}</span>
                                <span class="tag" data-i18n="tagInsomnia">${t('tagInsomnia')}</span>
                                <span class="tag" data-i18n="tagRelationship">${t('tagRelationship')}</span>
                                <span class="tag" data-i18n="tagWork">${t('tagWork')}</span>
                                <span class="tag" data-i18n="tagStudy">${t('tagStudy')}</span>
                            </div>
                        </div>
                        <div class="confession-options">
                            <div class="privacy-options">
                                <p data-i18n="privacySettings">${t('privacySettings')}</p>
                                <div class="radio-options">
                                    <label class="radio-label">
                                        <input type="radio" name="privacy" value="public" checked>
                                        <span class="radio-custom"></span>
                                        <span data-i18n="publicQuestion">${t('publicQuestion')}</span>
                                    </label>
                                    <label class="radio-label">
                                        <input type="radio" name="privacy" value="private">
                                        <span class="radio-custom"></span>
                                        <span data-i18n="privateQuestion">${t('privateQuestion')}</span>
                                    </label>
                                </div>
                            </div>
                            <div class="notification-option">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="email-notification">
                                    <span class="checkbox-custom"></span>
                                    <span data-i18n="emailNotify">${t('emailNotify')}</span>
                                </label>
                                <div class="email-input-container" style="display: none;">
                                    <input type="email" placeholder="${t('emailPlaceholder')}" data-i18n="emailPlaceholder" class="email-input">
                                </div>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button class="submit-confession-btn">
                                <i class="fas fa-paper-plane"></i> <span data-i18n="send">${t('send')}</span>
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
                            alert(t('enterThoughts'));
                            validSubmission = false;
                        }
                        
                        if (emailNotification && emailInput && !emailInput.value.trim()) {
                            alert(t('enterEmail'));
                            validSubmission = false;
                        }
                        
                        if (validSubmission) {
                            // Collect form data for submission
                            const privacyOption = document.querySelector('input[name="privacy"]:checked').value;
                            const selectedTags = Array.from(document.querySelectorAll('.tag.selected')).map(tag => tag.textContent);
                            const emailAddress = emailNotification && emailInput ? emailInput.value.trim() : '';
                            
                            // Generate a random user ID
                            const userId = Math.floor(1000 + Math.random() * 9000);
                            
                            // Generate a unique access code
                            const accessCode = generateAccessCode();
                            
                            // Store data in sessionStorage for the success page
                            const submissionData = {
                                confessionText,
                                privacyOption,
                                selectedTags,
                                emailNotification,
                                emailAddress,
                                userId,
                                accessCode
                            };
                            
                            sessionStorage.setItem('submissionData', JSON.stringify(submissionData));
                            
                            // In a real app, this would send the data to a server
                            console.log(submissionData);
                            
                            // Generate a random access code
                            const accessCode = Math.floor(10000 + Math.random() * 90000);
                            
                            // Create confirmation view
                            const confirmationView = document.createElement('section');
                            confirmationView.id = 'confirmation-view';
                            confirmationView.className = 'confirmation-view';
                            
                            confirmationView.innerHTML = `
                                <div class="confirmation-container">
                                    <div class="confirmation-header">
                                        <div class="confirmation-icon">
                                            <i class="fas fa-paper-plane"></i>
                                        </div>
                                        <h1 class="confirmation-title">你的信件已成功发出！</h1>
                                        <p class="confirmation-message">我们已收到你的心事，将尽快给予回应</p>
                                    </div>
                                    
                                    <div class="confirmation-code-box">
                                        <div class="code-header">
                                            <div class="code-label">
                                                <i class="fas fa-key"></i>
                                                <span>你的信件访问码</span>
                                            </div>
                                        </div>
                                        <div class="access-code-container">
                                            <div class="access-code">
                                                <span id="access-code-value">#${accessCode}</span>
                                            </div>
                                            <button id="copy-code-btn" class="copy-btn" title="复制访问码">
                                                <i class="far fa-copy"></i> 复制访问码
                                            </button>
                                        </div>
                                        <p class="code-info">请保存此访问码，用于以后查看回复</p>
                                    </div>
                                    
                                    <div class="confirmation-divider"></div>
                                    
                                    <div class="email-notification-section ${emailAddress ? 'with-email' : ''}">
                                        ${emailAddress ? `
                                        <div class="email-confirmed">
                                            <div class="email-icon">
                                                <i class="fas fa-envelope-open-text"></i>
                                            </div>
                                            <div class="email-content">
                                                <h3>邮件提醒已开启</h3>
                                                <p>有新回复时，我们会通知到：<strong>${emailAddress}</strong></p>
                                            </div>
                                        </div>` : `
                                        <div class="email-notification-box">
                                            <div class="email-icon">
                                                <i class="fas fa-bell"></i>
                                            </div>
                                            <div class="email-content">
                                                <h3>开启邮件提醒</h3>
                                                <p>当有人回复你的信件时，我们会发送邮件通知你</p>
                                                <div class="email-form">
                                                    <input type="email" id="confirmation-email" placeholder="请输入你的邮箱" value="${emailAddress}">
                                                    <button id="save-email-btn" class="primary-btn">
                                                        <i class="fas fa-bell"></i> 开启通知
                                                    </button>
                                                </div>
                                            </div>
                                        </div>`}
                                    </div>
                                    
                                    <div class="confirmation-actions">
                                        <button id="back-to-home-btn" class="secondary-btn">
                                            <i class="fas fa-home"></i> 返回首页
                                        </button>
                                        <button id="view-message-btn" class="primary-btn">
                                            <i class="fas fa-eye"></i> 查看我的信件
                                        </button>
                                    </div>
                                </div>
                            `;
                            
                            // Replace the confession view with confirmation view
                            const confessionView = document.getElementById('confession-view');
                            confessionView.parentNode.replaceChild(confirmationView, confessionView);
                            
                            // Add event listeners for the confirmation page buttons
                            const copyCodeBtn = document.getElementById('copy-code-btn');
                            if (copyCodeBtn) {
                                copyCodeBtn.addEventListener('click', () => {
                                    const accessCodeValue = document.getElementById('access-code-value').textContent;
                                    
                                    // Check if the Clipboard API is available
                                    if (navigator.clipboard) {
                                        navigator.clipboard.writeText(accessCodeValue)
                                            .then(() => {
                                                // Success feedback
                                                copyCodeBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
                                                copyCodeBtn.classList.add('copied');
                                                setTimeout(() => {
                                                    copyCodeBtn.innerHTML = '<i class="far fa-copy"></i> 复制访问码';
                                                    copyCodeBtn.classList.remove('copied');
                                                }, 2000);
                                            })
                                            .catch(err => {
                                                // Fallback for clipboard write failure
                                                console.error('无法复制文本: ', err);
                                                fallbackCopyTextToClipboard(accessCodeValue, copyCodeBtn);
                                            });
                                    } else {
                                        // Fallback for browsers that don't support clipboard API
                                        fallbackCopyTextToClipboard(accessCodeValue, copyCodeBtn);
                                    }
                                });
                                
                                // Fallback copy function using older methods
                                function fallbackCopyTextToClipboard(text, button) {
                                    const textArea = document.createElement("textarea");
                                    textArea.value = text;
                                    
                                    // Make the textarea out of viewport
                                    textArea.style.position = "fixed";
                                    textArea.style.left = "-999999px";
                                    textArea.style.top = "-999999px";
                                    document.body.appendChild(textArea);
                                    textArea.focus();
                                    textArea.select();
                                    
                                    try {
                                        const successful = document.execCommand('copy');
                                        if (successful) {
                                            button.innerHTML = '<i class="fas fa-check"></i> 已复制';
                                            button.classList.add('copied');
                                            setTimeout(() => {
                                                button.innerHTML = '<i class="far fa-copy"></i> 复制访问码';
                                                button.classList.remove('copied');
                                            }, 2000);
                                        } else {
                                            alert('无法复制访问码，请手动复制: ' + text);
                                        }
                                    } catch (err) {
                                        console.error('无法复制文本: ', err);
                                        alert('无法复制访问码，请手动复制: ' + text);
                                    }
                                    
                                    document.body.removeChild(textArea);
                                }
                            }
                            
                            const saveEmailBtn = document.getElementById('save-email-btn');
                            if (saveEmailBtn) {
                                saveEmailBtn.addEventListener('click', () => {
                                    const confirmationEmail = document.getElementById('confirmation-email').value.trim();
                                    if (confirmationEmail) {
                                        // Validate email format
                                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                        if (emailRegex.test(confirmationEmail)) {
                                            // In a real app, this would send the email to the server
                                            console.log('Email saved for notifications:', confirmationEmail);
                                            
                                            // Show loading state
                                            saveEmailBtn.disabled = true;
                                            saveEmailBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 保存中...';
                                            
                                            // Simulate network request
                                            setTimeout(() => {
                                                // Replace the email notification box with confirmation
                                                const emailNotificationSection = document.querySelector('.email-notification-section');
                                                emailNotificationSection.innerHTML = `
                                                    <div class="email-confirmed">
                                                        <div class="email-icon">
                                                            <i class="fas fa-envelope-open-text"></i>
                                                        </div>
                                                        <div class="email-content">
                                                            <h3>邮件提醒已开启</h3>
                                                            <p>有新回复时，我们会通知到：<strong>${confirmationEmail}</strong></p>
                                                        </div>
                                                    </div>
                                                `;
                                                emailNotificationSection.classList.add('with-email');
                                            }, 1000);
                                        } else {
                                            // Invalid email format
                                            const emailInput = document.getElementById('confirmation-email');
                                            emailInput.classList.add('error');
                                            
                                            // Show error message
                                            const errorMsg = document.createElement('p');
                                            errorMsg.className = 'email-error-msg';
                                            errorMsg.innerHTML = '请输入有效的邮箱地址';
                                            
                                            // Check if error message already exists
                                            const existingError = document.querySelector('.email-error-msg');
                                            if (!existingError) {
                                                emailInput.parentNode.insertBefore(errorMsg, emailInput.nextSibling);
                                            }
                                            
                                            // Focus the input for correction
                                            emailInput.focus();
                                            
                                            // Remove error styling when user types
                                            emailInput.addEventListener('input', function() {
                                                this.classList.remove('error');
                                                const errorMsg = document.querySelector('.email-error-msg');
                                                if (errorMsg) {
                                                    errorMsg.remove();
                                                }
                                            }, { once: true });
                                        }
                                    } else {
                                        alert('请输入有效的邮箱地址');
                                    }
                                });
                            }
                            
                            const backToHomeBtn = document.getElementById('back-to-home-btn');
                            if (backToHomeBtn) {
                                backToHomeBtn.addEventListener('click', () => {
                                    window.location.href = './';
                                });
                            }
                            
                            const viewMessageBtn = document.getElementById('view-message-btn');
                            if (viewMessageBtn) {
                                viewMessageBtn.addEventListener('click', () => {
                                    // In a real app, this would navigate to the message view page with the access code
                                    alert('查看信件功能正在开发中，敬请期待！');
                                });
                            }
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
    
    // Function to generate a unique access code
    function generateAccessCode() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed similar-looking characters
        let code = '';
        
        // Generate three groups of four characters
        for (let group = 0; group < 3; group++) {
            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                code += chars[randomIndex];
            }
            if (group < 2) code += '-';
        }
        
        return code;
    }
    
    // Success page functionality (for confession submission)
    const confessionPreview = document.getElementById('confession-preview');
    const confessionTags = document.getElementById('confession-tags');
    const userIdSpan = document.getElementById('user-id');
    const accessCodeSpan = document.getElementById('access-code');
    const copyCodeBtn = document.getElementById('copy-code-btn');
    
    if (confessionPreview && userIdSpan) {
        // We're on the success page, populate with data from sessionStorage
        const submissionData = JSON.parse(sessionStorage.getItem('submissionData') || '{}');
        
        if (submissionData.confessionText) {
            confessionPreview.textContent = submissionData.confessionText;
            userIdSpan.textContent = submissionData.userId || '3842';
            
            if (accessCodeSpan) {
                accessCodeSpan.textContent = submissionData.accessCode || 'XXXX-XXXX-XXXX';
            }
            
            if (submissionData.selectedTags && submissionData.selectedTags.length > 0 && confessionTags) {
                confessionTags.innerHTML = '';
                submissionData.selectedTags.forEach(tag => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'message-tag';
                    tagSpan.textContent = tag;
                    confessionTags.appendChild(tagSpan);
                });
            } else if (confessionTags) {
                // If no tags were selected, add a default one
                const tagSpan = document.createElement('span');
                tagSpan.className = 'message-tag';
                tagSpan.setAttribute('data-i18n', 'tagThoughts');
                tagSpan.textContent = t('tagThoughts');
                confessionTags.appendChild(tagSpan);
            }
        }
        
        // Add copy functionality to the copy button
        if (copyCodeBtn && accessCodeSpan) {
            copyCodeBtn.addEventListener('click', () => {
                const codeText = accessCodeSpan.textContent;
                navigator.clipboard.writeText(codeText).then(() => {
                    copyCodeBtn.classList.add('copied');
                    setTimeout(() => {
                        copyCodeBtn.classList.remove('copied');
                    }, 2000);
                });
            });
        }
    }
    
    // Helper success page functionality
    const questionPreview = document.getElementById('question-preview');
    const questionTags = document.getElementById('question-tags');
    const posterIdSpan = document.getElementById('poster-id');
    const replyContent = document.getElementById('reply-content');
    const todayHelpedSpan = document.getElementById('today-helped');
    const totalHelpedSpan = document.getElementById('total-helped');
    const totalThanksSpan = document.getElementById('total-thanks');
    
    if (questionPreview && replyContent) {
        // We're on the helper success page, populate with data from sessionStorage
        const helperData = JSON.parse(sessionStorage.getItem('helperData') || '{}');
        
        if (helperData.questionText) {
            questionPreview.textContent = helperData.questionText;
            posterIdSpan.textContent = helperData.posterId || '2831';
            replyContent.textContent = helperData.replyText || t('yourReply');
            
            // Update stats if available
            if (helperData.stats) {
                todayHelpedSpan.textContent = helperData.stats.todayHelped || '4';
                totalHelpedSpan.textContent = helperData.stats.totalHelped || '29';
                totalThanksSpan.textContent = helperData.stats.totalThanks || '12';
            }
            
            if (helperData.questionTags && helperData.questionTags.length > 0 && questionTags) {
                questionTags.innerHTML = '';
                helperData.questionTags.forEach(tag => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'message-tag';
                    tagSpan.textContent = tag;
                    questionTags.appendChild(tagSpan);
                });
            } else if (questionTags) {
                // If no tags were present, add a default one
                const tagSpan = document.createElement('span');
                tagSpan.className = 'message-tag';
                tagSpan.setAttribute('data-i18n', 'tagThoughts');
                tagSpan.textContent = t('tagThoughts');
                questionTags.appendChild(tagSpan);
            }
        }
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
                // Get the question text and tags
                const messageContent = document.querySelector('.message-content p');
                const messageTags = document.querySelectorAll('.message-tags .message-tag');
                const messageAuthor = document.querySelector('.message-author');
                
                if (messageContent) {
                    // Extract post ID from author text (format: "匿名提问者 #2831")
                    const posterId = messageAuthor ? 
                        messageAuthor.textContent.match(/#(\d+)/) ? 
                        messageAuthor.textContent.match(/#(\d+)/)[1] : '2831'
                        : '2831';
                    
                    // Get question tags
                    const questionTags = Array.from(messageTags).map(tag => tag.textContent);
                    
                    // Get the current stats
                    const todayHelpedText = document.querySelector('.help-stats .stat-item:nth-child(1)').textContent;
                    const totalHelpedText = document.querySelector('.help-stats .stat-item:nth-child(2)').textContent;
                    const totalThanksText = document.querySelector('.help-stats .stat-item:nth-child(3)').textContent;
                    
                    const todayHelped = parseInt(todayHelpedText.match(/\d+/)[0]) + 1;
                    const totalHelped = parseInt(totalHelpedText.match(/\d+/)[0]) + 1;
                    const totalThanks = parseInt(totalThanksText.match(/\d+/)[0]);
                    
                    // Prepare helper data for the success page
                    const helperData = {
                        questionText: messageContent.textContent,
                        posterId,
                        questionTags,
                        replyText,
                        stats: {
                            todayHelped,
                            totalHelped,
                            totalThanks
                        }
                    };
                    
                    // Store the data for the success page
                    sessionStorage.setItem('helperData', JSON.stringify(helperData));
                    
                    // In a real app, this would send the reply to a server
                    console.log(helperData);
                    
                    // Redirect to the helper success page
                    window.location.href = 'help-success.html';
                } else {
                    // If we can't find the question content, just show an alert
                    alert(t('replyThanks'));
                    replyTextarea.value = '';
                    updateHelperStats();
                }
            } else {
                alert(t('enterSuggestion'));
            }
        });
    }
    
    // Function to update the helper stats
    function updateHelperStats() {
        const todayHelped = document.querySelector('.help-stats .stat-item:nth-child(1)');
        if (todayHelped) {
            const currentCount = parseInt(todayHelped.textContent.match(/\d+/)[0]);
            todayHelped.innerHTML = `<i class="fas fa-heart"></i> <span data-i18n="todayHelped">${t('todayHelped')}</span>: ${currentCount + 1}<span data-i18n="people">${t('people')}</span>`;
        }
        
        const totalHelped = document.querySelector('.help-stats .stat-item:nth-child(2)');
        if (totalHelped) {
            const currentCount = parseInt(totalHelped.textContent.match(/\d+/)[0]);
            totalHelped.innerHTML = `<i class="fas fa-users"></i> <span data-i18n="totalHelped">${t('totalHelped')}</span>: ${currentCount + 1}<span data-i18n="people">${t('people')}</span>`;
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