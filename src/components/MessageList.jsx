import React from 'react';

const MessageList = () => {
  const messages = [];

  return (
    <div className="message-list">
      <h3>Messages</h3>
      {messages.length === 0 ? (
        <p>No new messages</p>
      ) : (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageList;
