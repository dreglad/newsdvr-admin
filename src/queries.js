import { GET_LIST } from 'react-admin';
import gql from 'graphql-tag';

export default {
  Fragment: {
    [GET_LIST]: gql`
      fragment fragment on Fragment {
        id
        start
        offset
        duration
        labels {
          id
          name
          value
        }
        metadata
        store {
          id
        }
      }
    `,
  },

  Exclusion: {
    [GET_LIST]: gql`
      fragment fragment on Fragment {
        id
        start
        offset
        duration
        store {
          id
        }
      }
    `,
  },

  Label: {
    [GET_LIST]: gql`
      fragment label on Label {
        id
        slug
        name
        value
      }
    `
  },

  Store: {
    [GET_LIST]: gql`
      fragment store on Store {
        id
        start
        end
        stream {
          id
        }
      }
    `
  },

  Stream: {
    [GET_LIST]: gql`
      fragment stream on Stream {
        id
        name
      }
    `
  },

  Schedule: {
    [GET_LIST]: gql`
      fragment schedule on Schedule {
        id
        weekdays
        count
        freq
        startTimes
        duration
        defaultLabels {
          id
          name
          value
        }
        stream {
          id
          name
        }
      }
    `
  },
  
  Rule: {
    [GET_LIST]: gql`
      fragment rule on Rule {
        id
      }
    `
  },
  
  Service: {
    [GET_LIST]: gql`
      fragment service on Service {
        id
        name
      }
    `
  }
};
