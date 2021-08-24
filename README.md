![notifyMessage version](https://img.shields.io/github/v/release/silentgrave/notifyMessage?color=brightgreen&style=flat-square)
![license](https://img.shields.io/github/license/silentgrave/notifymessage?style=flat-square)
### What is notify message? ###
Notify message it's a simple jquery library for create a simple and light push notification in your website!

### How does this work? ###
When calling the jquery "runNotify()" method, a notification is displayed at the top right with the text being passed.

### What are the display modes? ###
There are three ways available:
* Fixed: Allows to keep the notification open and give the user the possibility to close it.
* Notification: The notification is displayed and disappears after a period of time set by the user.
* Readmore: If a text is too large, you can decide to embed a button to view the entire text, while in the notification the first 30 characters are displayed.

### How can I set the library options? ###
For the moment the options are as follows:
* Level Message: [levelMessage]
* Type: [type]
* Message: [message]
* Message Title: [messageTitle]
* ReadMoreMessage: [readMoreMessage]
* Timer: [timer]

## Usage
Thi library required:
* JQuery 

You will need to include:
* The JavaScript file `notifyMessage.js` (or its minified version `notifyMessage.min.js`)
* The css file `notifyMessage.css`(or its minified version `notifyMessage.min.css`)
 
### Including files:
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/silentgrave/notify-message/notifyMessage/css/notifyMessage.min.css" />

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/silentgrave/notify-message/notifyMessage/js/notifyMessage.min.js"></script>
```
## Options

#### Message ####
The message of notification, is required for correct function of library.

---

#### Level Message ####
The level message is the type of message we can display. Notify message allows us to display 4 message levels that have different colors in the notification box:
* notify
* success
* error
* warning
> The default value is notify.
##### Example ######
```javascript
runNotify({
     message: 'Success message text!',
     levelMessage: 'success'
     });
```

---

#### Type ####
the type of notification display , there are 3 types of notification :
* fixed
* readmore
* notify
> The default value is notify.
##### Example ######
```javascript
runNotify({
     message: 'Success message text!',
     levelMessage: 'success',
     type: 'fixed'
     });
```

---

#### Message Title ####
The title of the notification message, is an option that is used only in the notification type 'readmore', it represents the modal title that is displayed when the link is pressed within the notification.
##### Example ######
```javascript
runNotify({
     message: 'Success message text!',
     levelMessage: 'success',
     type: 'readmore',
     messageTitle: 'Title of modal'
     });
```

---

#### Read more message ####
Represents the link text that displays the modal, it is only used within the 'readmore' notification type.
> The default value is 'Read more...'.
##### Example ######
```javascript
runNotify({
     message: 'Success message text!',
     levelMessage: 'success',
     type: 'readmore',
     messageTitle: 'Title of modal',
     readMoreMessage: 'Open the notify!'
     });
```
  
---

#### Timer ####
Represents the time that the notification remains visible.
> This option is not available for the fixed message type and read more. The default value of timer is 3 seconds.
##### Example ######
```javascript
runNotify({
     message: 'Success message text!',
     levelMessage: 'success',
     timer: 5000
     });
```
[I'm an inline-style link](https://github.com/silentgrave/notify-message/blob/8289f5309444084eb9a6dc1bcf4e726b5f440eb4/Example/index.html) 
