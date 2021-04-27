"use strict";

const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const ResourceSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  topics: [
    {
      topic: {
        type: String,
        required: true,
      },
      explanation: {
        type: String,
        required: true,
      },
      images: [
        {
          type: String,
          trim: true,
        },
      ],
    },
  ],
  conclusion: {
    type: String,
    required: true,
  },
  links: [
    {
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});

ResourceSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("resource", ResourceSchema);

/* 
Model example

"title": "Docker",
"description": "Accelerate how you build, share and run modern applications, Docker makes development efficient and predictable Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud. Docker’s comprehensive end to end platform includes UIs, CLIs, APIs and security that are engineered to work together across the entire application delivery lifecycle.",
"image": "https://1000logos.net/wp-content/uploads/2017/07/Docker-Logo.png",
"topics": [
    {
        "topic": "Docker documentation",
        "explanation": "Docker has its own web site with documentation about ussage of containers",
        "images": [
            {
                "https://docs.docker.com/opensource/images/docs-site-feedback.png"
            },
            {
                "https://docs.docker.com/engine/images/architecture.svg"
            },
            {
                "https://docs.docker.com/storage/images/types-of-mounts-volume.png"
            }
        ]
    },
    {
        "topic": "Docker github",
        "explanation": "Docker has its own open source repository in GitHub and in this place any developer can contribute with this beatifull and powerfull project",
        "images": [
            {   
                "https://miro.medium.com/max/2625/1*mzciQ4zYi3-j3EONuyGnrg.png"
            },
            {
               "https://miro.medium.com/max/4000/0*lcahX8pRIT-D-BDC.png"
            }
        ]
    },
    {
        "topic": "Docker images",
        "explanation": "Docker has a lot interesting images created by the community",
        "images": [
            {
                "https://www.cloudsigma.com/wp-content/uploads/cgroups-docker.jpg"
            },
            {
                "https://miro.medium.com/max/2520/1*p8k1b2DZTQEW_yf0hYniXw.png"
            },
            {
                "https://www.dataart.com.ar/media/2819748/docker2.png"
            }
        ]
    }
],
"conclusion": "Today, all major cloud providers and leading open source serverless frameworks use our platform, and many are leveraging Docker for their container-native IaaS offerings.",
"links": [
    {
        "name": "Docker official web page",
        "link": "https://www.docker.com/",
    },
    {
        "name": "Docker GitHub",
        "link": "https://github.com/docker"
    },
    {
        "name": "Docker images",
        "link": "https://hub.docker.com/"
    }
]
*/
