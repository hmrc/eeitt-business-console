var template = Handlebars.templates['brc-form']; // your template minus the .js
var context = {
  "forms": [
    {
      "title": "Biofuels and other fuel substitutes (HO930)",
      "link": "https://www-staging.tax.service.gov.uk/auth-login-stub/gg-sign-in?continue=https://www-staging.tax.service.gov.uk/submissions/form/HO930/1.0.0",
      "status": "Public Beta",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v1.2"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "Sent to customer"
        }
      ]
    },
    {
      "title": "Gas for use as a road fuel (CE930)",
      "link": "https://www-staging.tax.service.gov.uk/auth-login-stub/gg-sign-in?continue=https://www-staging.tax.service.gov.uk/submissions/form/CE930/1.0.0",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Aggregates Levy Return (AL100)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Air Passenger Duty Return (APD100)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Lottery Duty Return (****)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Gaming Duty Return (****)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Gaming Duty Payment on Account (****)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Insurance Premium Tax Return (IPT100)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Bingo Duty Return (****)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    },
    {
      "title": "Landfill Tax Return (****)",
      "link": "",
      "status": "Alpha",
      "documents": [
        {
          "link": "",
          "title": "Service design map",
          "version": "v0.4"
        }
      ],
      "communications": [
        {
          "title": "Comms 1",
          "status": "Sent to customer"
        },
        {
          "title": "Comms 2",
          "status": "In review"
        }
      ]
    }
  ]
};

var html = template(context);

var docFrag = document.createDocumentFragment();

context.forms.forEach(function(form) {
   var t = $(template(form));
   docFrag.appendChild(t[0]);
});


var contentEL = document.getElementById("brc-content");

contentEL.appendChild(docFrag);
