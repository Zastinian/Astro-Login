/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />
type Profile =
  | { success: false; email: null; username: null }
  | { success: true; email: string; username: string };

declare namespace App {
  interface Locals {
    profile: Profile;
  }
}
