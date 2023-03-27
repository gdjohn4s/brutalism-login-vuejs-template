<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import io from 'socket.io-client';

const socket = io("http://localhost:3000");
axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

let messages = ref([]);

const name = ref("");
const message = ref("");
const addMessage = async () => {
  if (!name.value) { return null};

  await axios.post("http://localhost:3000/messages", {
    "name": name.value,
    "message": message.value
  })
    .then((res) => {
      if (res.statusCode == 500) { console.log("Error")}
      if (res.statusCode == 201) { console.log("Created")}
    });
};

const getMessages = async () => {
  await axios.get("http://localhost:3000/messages")
      .then(function(res) {
        for (let i = 0; i < res.data.length; i++) {
          messages.value.push(res.data[i]);
        }
  });
};

const pushMessageInList = (messageBody) => {
  let tmp = {
    "name": messageBody.name,
    "message": messageBody.message
  }
  messages.value.unshift(tmp);
  console.log(messages.value)
}

socket.on('message', pushMessageInList);
onMounted(async () => {
  getMessages();
})
</script>

<template>
<body>
  <div id="app" class="container">
    <br>
      <form action="POST">
        <div class="jumbotron">
            <h1 class="display-4">Send Message</h1>
            <br>
            <input id="name" class="form-control" v-model="name" placeholder="Name">
            <br>
            <textarea id="message" class="form-control" v-model="message" placeholder="Your Message Here"></textarea>
            <br>
            <button id="send" class="btn btn-success" @click.prevent="addMessage()">Send</button>
        </div>
      </form>
        <div id="messages" class="mt-4" v-bind="messages.values" v-for="msg in messages" :key="msg.id">
          <h3> {{ msg.name }} </h3>
          <p> {{ msg.message }} </p>
        </div>
    </div>
</body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
