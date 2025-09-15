# **SIMPLE NETWORK CHAT APP**

A simple TCP-based chat app.

![thumbnail](/images/blogs/projects/bta/thumbnail.png)

---
## 🔧 Tools Used 
- Python
- Sockets
- Linux VM
- Wireshark

## 📋 About This Project
---
For my networking class, I developed a simple program that allows two clients to chat via a TCP-based connection. When two peers are connected, messages can only be exchanged bidirectionally, meaning each client takes turns reading and writing. 

Below is a description of how to use the program: 
A client is initialized when the user provides a name and a port number. Before connecting to another client, the use is required to register their client. Entering “/register” will send the clients contact information (name, IP address, and port) to a dedicated server. Once registered, the client can let the server know its ready to receive a connection by entering “/bridge”. Both clients having registered and bridged, any can initiate the conversation by entering “/chat”. The first to initiate the conversation is first to be given the ability to write while it's peer reads. When a message is exchanged, the clients switch. At any point, a client can terminate the conversation by entering “/quit” or Ctr+C. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/DHQ99TLJExA?si=UL2YKV35obK5E0Pc" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🔨 How It Works 
---
Internally, the client keeps track of its state. It's aware if it's registered, waiting for a connection, ready to connect, or, reading or writing a message.

When “/register” is inputted, the client sends a REGISTER request to the server. The request holds headers with the client's contact information. The server will then send an acknowledgment response back to the client with the information it recieved.

“/bridge” will send a BRIDGE request to the server. The purpose of this is to let the server know that the client it ready to connect to a peer. The server will send an acknowledgment response. If nothing is contained in the response, then there are no available peers to connect to and the client will be put into *WAIT MODE*. In *WAIT MODE*, the client continuously listens for a peer's request to chat. However, if the acknowledgment response contains the contact information of a peer, the client will be put into *READY MODE*. In *READY MODE*, the client is aware of its peer and is given the ability to initiate the conversation.

“/chat” initiates the conversation. The initiator client uses the peer's contact information received from the server to send a CHAT request. A CHAT request contains the contact information of the initiator client. When a client in *WAIT MODE* receives a CHAT request, it saves the peer's contact info. Sequentially, the initiator client is put into WRITE MODE and the peer client into *READ MODE*.

When a message is sent, the client writing is put into *READ MODE* and the reading client is put into WRITE MODE. Both clients can now exchange messages until any client terminates the conversation with “/quit” or Ctr+C. 