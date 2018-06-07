export default `
  type Query {
    userViews: [View]
  }

  type View {
    component: String
    title: String
  }
`;