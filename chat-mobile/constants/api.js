import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/api";

const fakeGroupId = '58c5e006cfc3bf8578ae77d2';

class ChatApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/chats`;
  }

  async fetchGroupChats() {
    const { data } = await axios.get(this.path);
    return data.chats;
  }
}

export {
  ChatApi
};
