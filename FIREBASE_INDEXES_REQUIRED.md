# Firebase Indexes Required - Seven Blue Store

هذا الملف يحتوي على جميع الفهارس المطلوبة لتشغيل نظام Seven Blue بشكل صحيح.

## المشكلة الحالية

عند تشغيل التطبيق، تظهر أخطاء في Console تقول:
\`\`\`
The query requires an index. You can create it here: [LINK]
\`\`\`

هذه الأخطاء تحدث لأن Firebase Firestore يحتاج فهارس مركبة (Composite Indexes) للاستعلامات المعقدة.

---

## الفهارس المطلوبة

### 1. Products Collection

**الفهرس الأول - New Arrivals:**
- Collection ID: `products`
- Fields to index:
  - `isActive` - Ascending
  - `createdAt` - Descending

**كيفية الإنشاء:**
1. اذهب إلى [Firebase Console](https://console.firebase.google.com)
2. اختر مشروع `seven-blue-6278c`
3. من القائمة الجانبية، اختر `Firestore Database`
4. اضغط على تبويب `Indexes`
5. اضغط `Create Index`
6. املأ البيانات:
   - Collection ID: `products`
   - Field 1: `isActive` - Ascending
   - Field 2: `createdAt` - Descending
7. اضغط `Create`

**أو استخدم الرابط المباشر من رسالة الخطأ:**
\`\`\`
https://console.firebase.google.com/v1/r/project/seven-blue-6278c/firestore/indexes?create_composite=ClFwcm9qZWN0cy9zZXZlbi1ibHVlLTYyNzhjL2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9wcm9kdWN0cy9pbmRleGVzL18QARoMCghpc0FjdGl2ZRABGg0KCWNyZWF0ZWRBdBACGgwKCF9fbmFtZV9fEAI
\`\`\`

---

### 2. Notifications Collection

**الفهرس الثاني - User Notifications:**
- Collection ID: `notifications`
- Fields to index:
  - `userId` - Ascending
  - `createdAt` - Descending

**الرابط المباشر:**
\`\`\`
https://console.firebase.google.com/v1/r/project/seven-blue-6278c/firestore/indexes?create_composite=ClZwcm9qZWN0cy9zZXZlbi1ibHVlLTYyNzhjL2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9ub3RpZmljYXRpb25zL2luZGV4ZXMvXxABGgoKBnVzZXJJZBABGg0KCWNyZWF0ZWRBdBACGgwKCF9fbmFtZV9fEAI
\`\`\`

---

### 3. Rewards Collection

**الفهرس الثالث - Active Rewards:**
- Collection ID: `rewards`
- Fields to index:
  - `isActive` - Ascending
  - `pointsRequired` - Ascending

**الرابط المباشر:**
\`\`\`
https://console.firebase.google.com/v1/r/project/seven-blue-6278c/firestore/indexes?create_composite=ClBwcm9qZWN0cy9zZXZlbi1ibHVlLTYyNzhjL2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9yZXdhcmRzL2luZGV4ZXMvXxABGgwKCGlzQWN0aXZlEAEaEgoOcG9pbnRzUmVxdWlyZWQQARoMCghfX25hbWVfXxAB
\`\`\`

---

### 4. Point Transactions Collection

**الفهرس الرابع - User Point Transactions:**
- Collection ID: `pointTransactions`
- Fields to index:
  - `userId` - Ascending
  - `createdAt` - Descending

**كيفية الإنشاء:**
- Collection ID: `pointTransactions`
- Field 1: `userId` - Ascending
- Field 2: `createdAt` - Descending

---

**الفهرس الخامس - Expiring Points:**
- Collection ID: `pointTransactions`
- Fields to index:
  - `userId` - Ascending
  - `expiresAt` - Ascending

**الرابط المباشر:**
\`\`\`
https://console.firebase.google.com/v1/r/project/seven-blue-6278c/firestore/indexes?create_composite=Clpwcm9qZWN0cy9zZXZlbi1ibHVlLTYyNzhjL2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9wb2ludFRyYW5zYWN0aW9ucy9pbmRleGVzL18QARoKCgZ1c2VySWQQARoNCglleHBpcmVzQXQQARoMCghfX25hbWVfXxAB
\`\`\`

---

### 5. Referrals Collection

**الفهرس السادس - User Referrals:**
- Collection ID: `referrals`
- Fields to index:
  - `referrerId` - Ascending
  - `createdAt` - Descending

**كيفية الإنشاء:**
- Collection ID: `referrals`
- Field 1: `referrerId` - Ascending
- Field 2: `createdAt` - Descending

---

### 6. Redemptions Collection

**الفهرس السابع - User Redemptions:**
- Collection ID: `redemptions`
- Fields to index:
  - `userId` - Ascending
  - `createdAt` - Descending

**كيفية الإنشاء:**
- Collection ID: `redemptions`
- Field 1: `userId` - Ascending
- Field 2: `createdAt` - Descending

---

### 7. Users Collection (للـ Top Referrers)

**الفهرس الثامن - Top Referrers:**
- Collection ID: `users`
- Fields to index:
  - `loyalty.referralCount` - Descending

**كيفية الإنشاء:**
- Collection ID: `users`
- Field 1: `loyalty.referralCount` - Descending

---

## طريقة سريعة للإنشاء

**الخطوة 1:** انسخ الروابط المباشرة أعلاه وافتحها في المتصفح (واحد تلو الآخر)

**الخطوة 2:** سيفتح Firebase Console مع نافذة إنشاء الفهرس مملوءة تلقائياً

**الخطوة 3:** اضغط `Create Index`

**الخطوة 4:** انتظر حتى يكتمل بناء الفهرس (عادة يستغرق دقائق قليلة)

**الخطوة 5:** كرر مع جميع الفهارس الأخرى

---

## التحقق من الفهارس

بعد إنشاء جميع الفهارس:

1. اذهب إلى Firebase Console > Firestore Database > Indexes
2. تأكد من أن جميع الفهارس في حالة "Enabled" (ليست "Building")
3. أعد تحميل التطبيق
4. تحقق من Console - يجب أن تختفي جميع الأخطاء

---

## ملاحظات مهمة

- **بناء الفهرس يستغرق وقتاً:** قد يستغرق من 1-10 دقائق حسب حجم البيانات
- **لا تحذف الفهارس القديمة:** بعض الفهارس المفردة (Single-field) يتم إنشاؤها تلقائياً
- **استخدم الروابط المباشرة:** أسرع طريقة هي النقر على الروابط في رسائل الخطأ أو نسخها من هنا

---

## قواعد الأمان المحدثة

تأكد أيضاً من تحديث قواعد Firebase Rules من ملف `firebase-rules-fixed.txt`:

\`\`\`bash
# في Firebase Console > Firestore Database > Rules
# انسخ المحتوى من firebase-rules-fixed.txt والصقه
# ثم اضغط Publish
\`\`\`

---

## الدعم

إذا واجهت أي مشاكل:
1. تأكد من تسجيل الدخول إلى Firebase Console
2. تأكد من اختيار المشروع الصحيح (seven-blue-6278c)
3. تحقق من أن لديك صلاحيات Owner أو Editor في المشروع
4. انتظر حتى يكتمل بناء جميع الفهارس قبل الاختبار

---

**تم إنشاء هذا الملف بواسطة v0.dev**
**آخر تحديث: 2025**
