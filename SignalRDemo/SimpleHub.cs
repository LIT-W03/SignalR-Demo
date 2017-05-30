using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalRDemo
{
    public class SimpleHub : Hub
    {
        public void UserSendMessageFoo(string text)
        {
            Clients.All.newMessage(text);
            //Context.User..........
        }

        public void NewUserConnected(int id)
        {
            Clients.All.newMessage($"{id} user connected");
        }
    }
}