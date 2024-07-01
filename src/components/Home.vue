<template>
  <div class="chat-container">
    <div class="chat-history" ref="chatHistory">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message"
        :class="{
          'user-message': message.type === 'user',
          'bot-message': message.type === 'bot'
        }"
      >
        {{ message.content }}
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息..." />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      messages: [
        { type: 'bot', content: '你好，有什么可以帮助您的吗？' },
      ],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') return;

      // 添加用户发送的消息到消息历史
      this.messages.push({ type: 'user', content: this.newMessage });

      // 模拟机器人回复（实际应用中，这里可以调用后端API返回回复）
      setTimeout(() => {
        this.messages.push({ type: 'bot', content: '这是机器人的回复，模拟GPT的对话效果。' });
        this.scrollToBottom();
      }, 500);

      // 清空输入框
      this.newMessage = '';
    },
    scrollToBottom() {
      // 滚动到消息历史的底部
      const chatHistory = this.$refs.chatHistory;
      if (chatHistory) {
        chatHistory.scrollTop = chatHistory.scrollHeight;
      }
    },
  },
  mounted() {
    // 初始加载时滚动到底部
    this.scrollToBottom();
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  justify-content: center; 
  flex-direction: column;
  height: 100%;
  padding: 20px;
  background: white;
  color: white; /* 添加颜色使文字在黑色背景上可见 */
}

.chat-history {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  max-height: 60vh; /* 最大高度，超出部分会出现滚动条 */
}

.message {
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 70%;
  color: black;
}

.user-message {
  align-self: flex-end;
  background-color: #cceeff;
}

.bot-message {
  align-self: flex-start;
  background-color: #e6e6e6;
}

.chat-input {
  display: flex;
  align-items: center;
}

.chat-input input {
  flex: 1;
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.chat-input button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
