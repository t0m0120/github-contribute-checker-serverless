'use strict';

const Xray = require("x-ray");
const x = Xray();
const request = require("request");

const githubName = "XXXXXXXXXXX";
const githubUrl = `https://github.com/users/${githubName}/contributions`;

const discordWebhook = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

module.exports.check_contribute = (event, context, callback) => {
  x(githubUrl, "rect", [{ count: "@data-count" }])((error, result) => {
    if (error) {
      console.log(error);
    } else {
      const contributions_result = result[result.length - 1].count;
      request.post(
        {
          url: discordWebhook,
          form: {
            content: `Today's contributions is ${contributions_result}times`
          }
        },
        function(err, response, body) {
          if (err) {
            console.log(err);
          } else {
            console.log(body);
          }
        }
      );
    }
  });
};
