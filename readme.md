# Real-time Chat

Source code of chat https://github.com/ezesundayeze/anonymouse-realtime-chat-app


## Installation

> Clone this repository and run

```bash
npm install

```

Then run:

```bash
npm start
```

goto your browser

and visit localhost:3000 and start chatting.

## Screenshots

I have used Kubernetes for mongodb and there is a screenshots with my pods:
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/pods.png "Kubernetes pods")

Link to docker hub: https://hub.docker.com/r/aygulmalikova/ds_lab9

After I configured everything and get the 1st member in the replication set as primary. There are screenshots of initial state.
 
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/1.1.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/1.2.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/1.3.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/1.4.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/1.5.png "Mongodb")

The Screenshot of chat with some messages:
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/1.chat.png "Mongodb")

To be sure that everything works correctly let's see the database
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/1.db.png "Mongodb")

##

Now, let's remove the primary instance and see the status and configuration of the replicaset
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/2.1.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/2.2.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/2.3.png "Mongodb")

After adding some messages to the chat:
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/2.chat.png "Mongodb")

Next, let's remove the second instance so that the 0's instance leaves alone and becomes the primary:
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/3.1.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/3.2.png "Mongodb")
![alt text](https://github.com/AygulMalikova/online-chat/blob/master/screenshots/3.chat.png "Mongodb")



