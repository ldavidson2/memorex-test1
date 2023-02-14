/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      SK
      companyName
      companyEmail
      companyNumber
      firstName
      lastName
      email
      phoneNumber
      specialty
      securityLevel
      clinicName
      dateOfBirth
      gender
      preferredContact
      dementiaLikelihood
      notes
      tests
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        SK
        companyName
        companyEmail
        companyNumber
        firstName
        lastName
        email
        phoneNumber
        specialty
        securityLevel
        clinicName
        dateOfBirth
        gender
        preferredContact
        dementiaLikelihood
        notes
        tests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        SK
        companyName
        companyEmail
        companyNumber
        firstName
        lastName
        email
        phoneNumber
        specialty
        securityLevel
        clinicName
        dateOfBirth
        gender
        preferredContact
        dementiaLikelihood
        notes
        tests
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
