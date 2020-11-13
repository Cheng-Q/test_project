const { graphql, buildSchema } = require('graphql');
const root = require('../tarbar.json')
// graphQL按需加载数据
async function getData() {
  // 描述数据结构 schema
  const schema = buildSchema(`
    type Info {
      text: String
      target: String
      reportClick: String
      href: String
    }
    type Query {
      aa: [Info]
    }
  `);
  const query = `
    {
      aa {
        text
      }
    }
  `;
  const resData = await graphql(schema,query,root)
  console.log('按需加载数据', JSON.stringify(resData))
  return resData
}

getData()