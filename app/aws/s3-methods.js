const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: process.env.KEY, secretAccessKey: process.env.SECRET, region: process.env.REGION
});
const s3 = new AWS.S3();

module.exports = {
    list: async () => {
        try {
            let objects = [];
            const response = s3.listObjectsV2({
                Bucket: "pointer-media",
                MaxKeys: 10
            }).promise();
    
            await response.then(data => {
                for (let i = 0; i < data.Contents.length; i++) {
                    objects.push("https://pointer-media.s3-sa-east-1.amazonaws.com/"+data.Contents[i].Key); 
                }
            });
            return objects;
        } catch (error) {
            throw error;
        }
    },
    getImageByName: async (imageName) => {
        try {
            let objects = [];
            const response = s3.listObjectsV2({
                Bucket: "pointer-media",
                Prefix: imageName
            }).promise();
    
            await response.then(data => {
                for (let i = 0; i < data.Contents.length; i++) {
                    objects.push("https://pointer-media.s3-sa-east-1.amazonaws.com/"+data.Contents[i].Key); 
                }
            });
            return objects;
        } catch (error) {
            throw error;
        }
    }
};
