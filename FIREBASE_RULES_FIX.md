# Firebase Firestore Security Rules - Fix

## How to Update Your Rules:

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project: "seven-blue-6278c"
3. Go to: Firestore Database → Rules
4. Replace ALL content with these rules:

\`\`\`

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Allow authenticated users to read all products
    match /products/{productId} {
      allow read: if request.auth != null;
      allow create, update, delete: if request.auth != null && hasAdminRole();
    }
    
    // Allow users to read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null; // Allow other users to read profiles
    }
    
    // Helper function to check admin role
    function hasAdminRole() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}

\`\`\`

5. Click "Publish"

## For Testing/Development (Less Secure):

If you want to test quickly, you can use:

\`\`\`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
\`\`\`

This allows any authenticated user to read/write everything. Use this ONLY for testing, then switch to the production rules above.

## Expected Result:

After updating rules:
✓ Users can view products
✓ Users can add new products (if they have admin role)
✓ No more "Missing or insufficient permissions" errors
