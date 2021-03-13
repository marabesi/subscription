import { EntitySchema } from 'typeorm'

export const CampainEntity = new EntitySchema({
  name: 'campain',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    description: {
      type: String
    },
  }
});

export const SubscriptionEntity = new EntitySchema<{
  id: number,
  name: string,
  email: string,
  gender: string,
  dateOfBirth: Date,
  consent: boolean
}>({
  name: 'subscription',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    name: {
      type: String,
      nullable: true
    },
    email: {
      type: String
    },
    gender: {
      type: String,
      nullable: true
    },
    dateOfBirth: {
      type: Date
    },
    consent: {
      type: Boolean,
    }
  },
});

export default {
  CampainEntity,
  SubscriptionEntity
}