/* import SES from 'aws-sdk/clients/ses'; */
const AWS = require('aws-sdk')
/* import SES = require("aws-sdk/clients/ses") */
AWS.config.update({accessKeyId: 'AKIA6IWGEQHBIXRDDCZE',secretAccessKey:'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', region: 'us-east-2'});
module.exports={
  async  sendEmail(email,password) {
   console.log(email,password,'jjjjjjj')
    var params = {
      Destination: { /* required */
        
        ToAddresses: [
          email,
          /* more items */
        ]
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
           Charset: "UTF-8",
           Data:`Esta é sua senha temporária: ${password}, entre e altere a senha`
          },
          Text: {
           Charset: "UTF-8",
           Data: `Esta é sua senha temporária: ${password}, entre e altere a senha`
          }
         },
         Subject: {
          Charset: 'UTF-8',
          Data: 'Recuperação de Senha App-LocalizaUnifap'
         }
        },
      Source: 'itl_leal@zohomail.com', /* required */
      
    };

    /* var params = {
        Content: {
            Simple: {
                Body: {
                    Text:{Data:`Esta é sua senha temporária : ${password}, entre e altere a senha`}
                },
                Subject: {  Data:'Recuperação de Senha App-LocalizaUnifap', Charset: 'UTF-8' }//ISO-8859-1
            }
        },
        Destination: { ToAddresses: [email] },
        
        FromEmailAddress: 'Unifap <itl_leal@zohomail.com>',
        
    } */
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data,'awuuuuuu');
    return;
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
  console.log('sllllllllll')
  return
    /* const response = await ses.sendEmail(params).promise(); */
    /* console.log(response); */
}
}
/* class EnviaEmail{
  private client: SES;
  constructor(){
    this.client = new SES();
  }
      async run(email:string,password:string):Promise<void> {
        
       await this.client.sendEmail({
          Source:'Unifap <itl_leal@zohomail.com>',Destination:{
            ToAddresses:[`Unifap<${email}>`]
          },Message:{
            Subject:{
              Data:'Recuperação de Senha App-LocalizaUnifap'
            },
            Body:{
              Text:{
                Data:`Esta é sua senha temporária : ${password}, entre e altere a senha`
              }
            }
          }}
          ).promise
       

} } */
/* module.exports = EnviaEmail;  */


/* export default  EnviaEmail; */

