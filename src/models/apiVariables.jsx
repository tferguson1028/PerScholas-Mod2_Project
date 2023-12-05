const uri = "https://api.openvisionapi.com";
const path = "/api/v1/detection";

const requestMethod = "POST";

const header = {"Content-type": "multipart/form-data; boundary=---BOUNDARY" };
const body = `-----BOUNDARY
Content-Disposition: form-data; name="model"
yolov4
-----BOUNDARY
Content-Disposition: form-data; name="image"; filename="image.jpg"
Content-Type: image/jpeg
/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy
MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIA
AhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEB
AAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AD//Z
-----BOUNDARY
`;

module.exports = { uri, path, requestMethod, header, body };