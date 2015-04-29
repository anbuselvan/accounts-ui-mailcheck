// Extended mailcheck package for Meteor
(function() {

  MeteorMailCheck = {};

  MeteorMailCheck.EmailPrefixText = "Did you mean";
  MeteorMailCheck.EmailSuffixText = "?";
  MeteorMailCheck.init = function() {
    $(function() {
      $("body").on("focusout", "#login-email", function(event) {
        $(this).mailcheck({
          suggested: function(element, suggestion) {
            // remove the suggested text if exists
            $(element).parent().find('#mailcheck-suggestion-text').remove();
            // add new suggested text
            $(element).after("<div id='mailcheck-suggestion-text'>" + MeteorMailCheck.EmailPrefixText + " <span class='mailcheck-suggestion-email error-message'>" + suggestion.full + "</span>" + MeteorMailCheck.EmailSuffixText + "</div>");
            // attach the click event to pick the suggested email
            $(element).parent().find('.mailcheck-suggestion-email').click(function() {
              $(element).val(suggestion.full);
              $(element).parent().find('#mailcheck-suggestion-text').remove();
            });
          },
          empty: function(element) {
            // email looks good - remove the suggested text if exists
            $(element).parent().find('#mailcheck-suggestion-text').remove();
          }
        });
      });

      $("body").on("focusout", "#forgot-password-email", function(event) {
        $(this).mailcheck({
          suggested: function(element, suggestion) {
            // remove the suggested text if exists
            $(element).parent().find('#mailcheck-suggestion-text').remove();
            // add new suggested text
            $(element).after("<div id='mailcheck-suggestion-text'>" + MeteorMailCheck.EmailPrefixText + " <span class='mailcheck-suggestion-email error-message'>" + suggestion.full + "</span>" + MeteorMailCheck.EmailSuffixText + "</div>");
            // attach the click event to pick the suggested email
            $(element).parent().find('.mailcheck-suggestion-email').click(function() {
              $(element).val(suggestion.full);
              $(element).parent().find('#mailcheck-suggestion-text').remove();
            });
          },
          empty: function(element) {
            // email looks good - remove the suggested text if exists
            $(element).parent().find('#mailcheck-suggestion-text').remove();
          }
        });
      });
    });
  };

})();
