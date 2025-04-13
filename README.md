# Anonymous Chat Forum

A simple, lightweight anonymous chat forum that requires no registration or login. Users can send messages and participate in discussions without creating an account.

## Features

- **Anonymous Messaging**: Send messages without creating an account
- **Optional Nicknames**: Choose to use a nickname or remain completely anonymous
- **Real-time Display**: Messages appear instantly in the chat window
- **Responsive Design**: Works on desktop and mobile devices
- **No Data Storage**: Messages exist only in the current session and are not stored permanently

## How to Use

1. Open `index.html` in a web browser
2. Type your message in the text area
3. (Optional) Enter a nickname in the nickname field
4. Click the "Send" button or press Enter to send your message
5. Your message will appear in the chat window

## Implementation Notes

This is a client-side only implementation, which means:
- All messages are temporary and only visible to users currently viewing the page
- Messages are not persisted in any database
- No registration or login is required
- No personal data is collected

## Installation

No installation required. Simply download the repository and open `index.html` in any modern web browser.

```
git clone https://github.com/yourusername/anonymous-chat-forum.git
cd anonymous-chat-forum
```

Then open `index.html` in your browser.

## Limitations

- Since this is a client-side only implementation, messages are not stored on a server
- Messages will disappear when the page is refreshed
- Users cannot see messages that were sent before they joined the session

## Future Enhancements

Potential improvements that could be added:

- Server-side integration for message persistence
- Chat rooms for different topics
- Message formatting options
- Image and file sharing
- Moderation features

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This chat forum is intended for demonstration purposes. In a production environment, appropriate measures should be taken to prevent abuse and ensure legal compliance.