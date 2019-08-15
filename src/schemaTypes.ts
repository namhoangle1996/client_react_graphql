/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSubscriptionMutation
// ====================================================

export interface CreateSubscriptionMutation_createSubcription {
  __typename: "User";
  id: string;
  email: string;
}

export interface CreateSubscriptionMutation {
  createSubcription: CreateSubscriptionMutation_createSubcription | null;
}

export interface CreateSubscriptionMutationVariables {
  source: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutaion
// ====================================================

export interface LoginMutaion_login {
  __typename: "User";
  id: string;
  email: string;
}

export interface LoginMutaion {
  login: LoginMutaion_login | null;
}

export interface LoginMutaionVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  id: string;
  email: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery1
// ====================================================

export interface MeQuery1_get_all_user {
  __typename: "AllUser";
  id: string | null;
  email: string | null;
  stripeId: string | null;
  password: string | null;
}

export interface MeQuery1 {
  get_all_user: (MeQuery1_get_all_user | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutaion
// ====================================================

export interface RegisterMutaion {
  register: boolean | null;
}

export interface RegisterMutaionVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
