import mongoose from 'mongoose'

const URI =  'mongodb+srv://valeriapaulinalustres:Artemisa37@cluster0.knm2ak6.mongodb.net/epi-r2?retryWrites=true&w=majority'

try {
  await mongoose.connect(URI)
  console.log('Conectado a la base de datos')
} catch (error) {
  console.log(error)
}