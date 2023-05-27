/**
 * Copyright (c) 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
 const fdk=require('@fnproject/fdk');

 fdk.handle(function(input){
   let name = 'World';
   if (input.name) {
     name = input.name;
   }
   console.log('\nInside Node Hello World function')
   return {'message': 'Hello ' + name}
 })