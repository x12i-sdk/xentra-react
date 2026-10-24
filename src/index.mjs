import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { writeFile } from 'node:fs/promises';
async function savePreview(markup) {
  assert(markup.length > 0);
  await writeFile('preview.html', '<!doctype html><html lang="en"><meta charset="utf-8"><title>Package UI fixture</title><body>' + markup + '</body></html>');
  console.log('Generated preview.html (' + markup.length + ' characters).');
}
import { XentraProvider, PermissionGate } from '@x12i/xentra-react';
import { createXentraClient } from '@x12i/xentra-sdk';
const client = createXentraClient({ baseUrl: 'https://xentra.example.invalid' });
const markup = renderToStaticMarkup(React.createElement(XentraProvider, { client, accountId: 'fixture-account' },
  React.createElement(PermissionGate, { action: 'document.read', resource: { resourceType: 'document', resourceId: 'doc-1' },
    fallback: React.createElement('p', null, 'Permission pending'),
  }, React.createElement('p', null, 'Protected fixture content')),
));
assert(!markup.includes('Protected fixture content'));
await savePreview(markup || '<p>Permission pending; protected content is withheld.</p>');
