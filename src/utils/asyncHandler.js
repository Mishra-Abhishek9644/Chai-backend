// const asyncHandler = () => {}

const asyncHandler = (requestHandler) => {
  Promise.resolve(requestHandler(requestHandler, res, next))
  .catch((err) => next(err))
}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
    
//   } catch (err) {
//     res.status(err.code || 500).json({
//         succes: false,
//         message: err.message
//     })
//   }
// }


    export { asyncHandler }