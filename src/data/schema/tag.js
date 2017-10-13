export const types = `
  type Tag {
    _id: String!
    name: String
    type: String
    colorCode: String
    createdAt: Date
    objectCount: Int
  }
`;

export const queries = `
  tags(type: String): [Tag]
`;

export const mutations = `
	tagsAdd(name: String!, type: String!, colorCode: String): Tag
	tagsUpdate(_id: String!, name: String!, type: String!, colorCode: String): Tag
  tagsRemove(ids: [String!]!): Tag
	tagsTag(type: String!, targetIds: [String!]!, tagIds: [String!]!): Tag
`;
