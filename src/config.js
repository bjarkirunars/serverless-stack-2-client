const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-mjrbxfhaa0sb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vmjqm5sarj.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Wy9RwgozP",
    APP_CLIENT_ID: "aaonijscm9kc39qdit716cp31",
    IDENTITY_POOL_ID: "us-east-1:3a776a75-4ee3-4a50-a7e0-407eec9863ee"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ah56xrj0r4l3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9a7xy73yf5.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mkaGJfguX",
    APP_CLIENT_ID: "j3tgvme6phm4vmdt2gc2vbf7",
    IDENTITY_POOL_ID: "us-east-1:00a55f3e-06e0-4a92-aecb-029e1720adca"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
