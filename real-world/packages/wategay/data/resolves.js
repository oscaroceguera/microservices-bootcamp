const mockMails = [
  {
    subject: 'My first Email',
    receiver: 'test',
    content: 'hello world'
  },
  {
    subject: 'My second Email',
    receiver: 'test',
    content: 'hello world'
  },
  {
    subject: 'My third Email',
    receiver: 'test',
    content: 'hello world'
  }
]

module.exports = {
  Query: {
    mails: () => mockMails,
    mail: (_, args) => mockMails[0]
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[0] = args

      return args
    }
  }
}
