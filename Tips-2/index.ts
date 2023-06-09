export type Entity =
  | {
      type: "user"
    }
  | {
      type: "post"
    }
  | {
      type: "comment"
    }



    // type EntityWithId =
    // | {
    //     type: "user"
    //     userId: string
    //   }
    // | {
    //     type: "post"
    //     postId: string
    //   }
    // | {
    //     type: "comment"
    //     commentId: string
    //   }

    type EntityWithId = {
        [EntityType in Entity["type"]]: {
          type: EntityType
        } & Record<`${EntityType}Id`, string>
      }[Entity['type']]

      const result: EntityWithId = {
        type: 'comment',
        commentId: '123'
      }
      
      const userResult: EntityWithId = {
        type: "user",
        userId: "123",
      }
      
      const postResult: EntityWithId = {
        type: "post",
        postId: "123",
      }