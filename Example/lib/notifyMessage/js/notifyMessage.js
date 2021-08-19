/*notifyMessage 1.1.0
Copyright 2021 a project by Ivan Persiani

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function runNotify(options) {
  if (options == undefined || options == null) {
    alert("Error! Read guideline!");
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

    if (typeMessage === "readmore") {
      message =
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
      message +
      "</div>";

    $("body").append(notifyItem);
    var $notifyElement = $("#" + notifyName);
    $notifyElement.animate({ right: "1rem" }, 500);

    if (typeMessage === "fixed") {
      $notifyElement.append(
        '<i class="allertNotifyButton" ><svg viewBox="0 0 25 25" width="15px" height="15px">' +
          '<path fill="currentcolor" d = "M16.043,11.667L22.609,5.1c0.963-0.963,0.963-2.539,0-3.502l-0.875-0.875c-0.963-0.964-2.539-0.964-3.502,0L11.666,7.29  L5.099,0.723c-0.962-0.963-2.538-0.963-3.501,0L0.722,1.598c-0.962,0.963-0.962,2.539,0,3.502l6.566,6.566l-6.566,6.567  c-0.962,0.963-0.962,2.539,0,3.501l0.876,0.875c0.963,0.963,2.539,0.963,3.501,0l6.567-6.565l6.566,6.565  c0.963,0.963,2.539,0.963,3.502,0l0.875-0.875c0.963-0.963,0.963-2.539,0-3.501L16.043,11.667z" />' +
          "Sorry, your browser does not support inline SVG." +
          "</svg ></i>"
      );
      $(".allertNotifyButton").on("click", function () {
        CloseNotifyItem($notifyElement);
      });
    } else if (typeMessage === "readmore") {
      if (messageTitle == undefined || messageTitle == null) {
        messageTitle = levelMessage;
      }
      //TODO: Remove Bootstrap dependency
      var modalName = notifyName + "modal";
      $notifyElement.attr("data-toggle", "modal");
      $notifyElement.attr("data-target", modalName);
      var modalItem =
        '<div id="' +
        modalName +
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
      var $modalElement = $("#" + modalName);
      $(".allertNotifyReadMore").on("click", function () {
        ReadMoreNotifyItem($modalElement, $notifyElement);
      });
    } else {
      if (timer == undefined || timer == null) {
        timer = "3000";
      }
      $notifyElement.delay(parseInt(timer)).queue((next) => {
        $notifyElement.animate(
          {
            top: "40rem",
            opacity: 0,
          },
          1000
        );
        next();
      });
      setTimeout(function () {
        $notifyElement.remove();
      }, parseInt(timer) + 2000);
    }
  }
}

function CloseNotifyItem($notify) {
  $notify.animate(
    {
      top: "40rem",
      opacity: 0,
    },
    1000
  );
  setTimeout(function () {
    $notify.remove();
  }, 2000);
}

function ReadMoreNotifyItem($modal, $notify) {
  $modal.modal(); //TODO: Remove bootstrap library
  CloseNotifyItem($notify);
}
