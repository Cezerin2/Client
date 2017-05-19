class Settings {
  constructor(client) {
    this.client = client;
  }

  retrieve() {
    return this.client.get('/settings');
  }

  update(data) {
    return this.client.put('/settings', data);
  }

  retrieveEmailSettings() {
    return this.client.get('/settings/email');
  }

  updateEmailSettings(data) {
    return this.client.put('/settings/email', data);
  }

  retrieveEmailTemplate(name) {
    return this.client.get(`/settings/email/templates/${name}`);
  }

  updateEmailTemplate(name, data) {
    return this.client.put(`/settings/email/templates/${name}`, data);
  }

  uploadLogo(data) {
    throw 'Not implemented';
    //return this.client.post(`/settings/logo`, data);
  }

  deleteLogo() {
    return this.client.delete(`/settings/logo`);
  }
}

module.exports = Settings