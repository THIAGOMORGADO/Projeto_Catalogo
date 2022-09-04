
class UserController {
  async Index(req, res) {
    return res.json({messager: 'This a controller in users'})
  }
  async Show(req, res) {
    return res.json({messager: 'This a controller in users show'})
  }
  async Create(req, res) {
    return res.json({messager: 'This a controller in users create'})
  }
  async Update(req, res) {
    return res.json({messager: 'This a controller in users Update'})
  }
  async Delete(req, res) {
    return res.json({messager: 'This a controller in users Delete'})
  }
}

export default new UserController;