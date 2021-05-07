document.querySelector("#start_chat").addEventListener("click", (event) => {
  console.log("O botão de suporte foi clicado! :)");

  const chat_help = document.getElementById("chat_help");
  chat_help.style.display = "none";

  const chat_in_support = document.getElementById("chat_in_support");
  chat_in_support.style.display = "block";
  //Se conecta com o websocket:
  const socket = io();

  //Pega oq foi digitado no email:
  const email = document.getElementById("email").value;
  //Pega oq foi digitado na caixa de texto:
  const text = document.getElementById("txt_help").value;

  socket.on("connect", () => {
    const params = {
      email,
      text,
    };

    socket.emit("client_first_access", params, (call, err) => {
      if (err) {
        console.err(err);
      } else {
        console.log(call);
      }
    });
  });

  socket.on("client_list_all_messages", (messages) => {
    var template_client = document.getElementById("message-user-template")
      .innerHTML;
    var template_admin = document.getElementById("admin-template").innerHTML;

    messages.forEach((message) => {
      if (message.admin_id === null) {
        const rendered = Mustache.render(template_client, {
          message: message.text,
          email,
        });

        //Adiciona as mensagens, sem sobrescrever cada uma delas:
        document.querySelector("messages").innerHTML += rendered;
      } else {
        const rendered = Mustache.render(template_admin, {
          message_admin: message.text,
        });

        //Adiciona as mensagens, sem sobrescrever cada uma delas:
        document.querySelector("messages").innerHTML += rendered;
      }
    });
  });
});
