import jsonwebtoken from 'jsonwebtoken';

export const isUser = async (req, res, next) => {
    console.log(req.cookies)
    try {
        if (req.cookies && req.cookies.user_token.token){
            const validate = jsonwebtoken.verify(req.cookies.user_token.token, process.env.SECRET_TOKEN);
            console.log(req.cookies.user_token.token ,validate)
            req.isUser = validate.id
        }else{
            console.log('no hay ')
        }
        next()
    }
    catch (error) {
        console.log(error)
        return res.status(403).json({ message: 'Invalid Token' })
    }

}
