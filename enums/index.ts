// enum Colors {
//   Red,
//   Green,
//   Blue
// }

// // function showColor(color) {
// //   console.log(`The color is: ${Colors[color]}`);
// // }

// // showColor(Colors.Green); // Output: The color is: Green

// enum UserResponse {
//     No = 0,
//     Yes = 1,
// }

// function respondedEmail (recipient: string, response: UserResponse) {
//     console.log(`The recipient ${recipient} responded with: ${UserResponse[response]}`);
// }

 enum StatusCode {
     Success = 200,
     NotFound = 404,
     InternalServerError = 500
 }

const okStatus: StatusCode = StatusCode.Success;
