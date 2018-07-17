/*notifyMessage 1.0.0*/
function runNotify(options) {
  if (
    options == undefined ||
    options == null ||
    (options.message == undefined ||
      options.message == null ||
      options.message === "")
  ) {
    alert("Errore nell'uso della libreria. Controlla le linee guida.");
  } else {
    var levelMessage = options.levelMessage;
    var typeMessage = options.type;
    var message = options.message;
    var messageTitle = options.messageTitle;
    var timer = options.timer;
    var readMoreMessage =
      options.readMoreMessage == undefined ||
      options.readMoreMessage == null ||
      options.readMoreMessage === ""
        ? "Read more..."
        : options.readMoreMessage;

    var typeClass;

    switch (levelMessage) {
      case "notify":
        typeClass = "alert-primary";
        break;
      case "error":
        typeClass = "alert-danger";
        break;
      case "success":
        typeClass = "alert-success";
        break;
      case "warning":
        typeClass = "alert-warning";
        break;
      default:
        typeClass = "alert-primary";
        break;
    }
    var notifyName = "notificationItem" + $(".notificationItem").length;
    var notifyNameForJquery =
      "#notificationItem" + $(".notificationItem").length;
    var messageReview = message;
    if (typeMessage === "readmore") {
      messageReview =
        jQuery
          .trim(message)
          .substring(0, 30)
          .split(" ")
          .slice(0, -1)
          .join(" ") +
        ' <span class="allertNotifyReadMore">' +
        readMoreMessage +
        "</span>";
    }

    var notifyItem =
      '<div id="' +
      notifyName +
      '" class="alert ' +
      typeClass +
      ' alertNotify notificationItem">' +
      messageReview +
      "</div>";
    $("body").append(notifyItem);

    $(notifyNameForJquery).animate({ right: "1%" }, 500);

    if (typeMessage === "fixed") {
      $(notifyNameForJquery).append(
        '<i class="allertNotifyButton" ><svg viewBox="0 0 25 25" width="15px" height="15px">' +
          '<path fill="currentcolor" d = "M16.043,11.667L22.609,5.1c0.963-0.963,0.963-2.539,0-3.502l-0.875-0.875c-0.963-0.964-2.539-0.964-3.502,0L11.666,7.29  L5.099,0.723c-0.962-0.963-2.538-0.963-3.501,0L0.722,1.598c-0.962,0.963-0.962,2.539,0,3.502l6.566,6.566l-6.566,6.567  c-0.962,0.963-0.962,2.539,0,3.501l0.876,0.875c0.963,0.963,2.539,0.963,3.501,0l6.567-6.565l6.566,6.565  c0.963,0.963,2.539,0.963,3.502,0l0.875-0.875c0.963-0.963,0.963-2.539,0-3.501L16.043,11.667z" />' +
          "Sorry, your browser does not support inline SVG." +
          "</svg ></i>"
      );
      $(".allertNotifyButton").attr(
        "onClick",
        "CloseNotifyItem('" + notifyNameForJquery + "');"
      );
    } else if (typeMessage === "readmore") {
      if (messageTitle == undefined || messageTitle == null) {
        messageTitle = levelMessage; //se il titolo del modal imposto il valore in base al livello impostato dell'utente.
      }
      var modalNameForJquery = notifyNameForJquery + "modal";
      $(notifyNameForJquery).attr("data-toggle", "modal");
      $(notifyNameForJquery).attr("data-target", modalNameForJquery);
      var modalItem =
        '<div id="' +
        modalNameForJquery.replace("#", "") +
        '" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> ' +
        '<div class="modal-dialog modal-lg"> ' +
        '<div class="modal-content">' +
        '<div class="modal-header"> ' +
        '<h5 class="modal-title" id="ModalLabel">' +
        messageTitle +
        "</h5> " +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"> ' +
        '<span aria-hidden="true">&times;</span>' +
        "</button>" +
        "</div>" +
        '<div class="modal-body">' +
        message +
        "</div>" +
        "</div> " +
        "</div> " +
        "</div>";
      $("body").append(modalItem);
      $(".allertNotifyReadMore").attr(
        "onClick",
        "ReadMoreNotifyItem('" +
          modalNameForJquery +
          "','" +
          notifyNameForJquery +
          "');"
      );
    } else {
      //se timer è null imposto un valore di default di 3 secondi
      if (timer == undefined || timer == null) {
        timer = "3000";
      }
      $(notifyNameForJquery)
        .delay(parseInt(timer))
        .queue(next => {
          $(notifyNameForJquery).animate(
            {
              top: "90%",
              opacity: 0
            },
            1000
          );
          next();
        });
      setTimeout(function() {
        $(notifyNameForJquery).remove();
      }, parseInt(timer) + 2000);
    }
  }
}

//esegue la chiusura del
function CloseNotifyItem(notifyNameForJquery) {
  $(notifyNameForJquery).animate(
    {
      top: "90%",
      opacity: 0
    },
    1000
  );
  setTimeout(function() {
    $(notifyNameForJquery).remove();
  }, 2000);
}

function ReadMoreNotifyItem(modalNameForJquery, notifyNameForJquery) {
  $(modalNameForJquery).modal();
  CloseNotifyItem(notifyNameForJquery);
}
