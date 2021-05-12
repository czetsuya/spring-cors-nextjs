export default async (req, res) => {

  const resp = await fetch(`http://192.168.1.9:8080/books/?r=` + Math.random())
  const data = await resp.json()

  res.status(200).json({data})
}
