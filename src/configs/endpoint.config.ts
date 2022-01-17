const baseEndPoint = {
  baseUrl: 'https://us-central1-kitsutaka-62277.cloudfunctions.net/api_v2', // project api base url
  postCodeBaseUrl: 'https://apis.postcode-jp.com/api/v4/postcodes?filter=postcode==', // PostCode info from outside {params: {filter: postcode==134*, limit: 20}}
  reportEndPoint: '',
};

export default baseEndPoint;
