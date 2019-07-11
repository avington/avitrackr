import { Observable, of } from 'rxjs';

// pull out the data and id from firebase snapshot and flatten it into one simple object.
export const mapSnapshot = (data: any[]) => {
  return of(
    data.map((d: any) => {
      const doc = d.payload.doc.data();
      doc.id = d.payload.doc.id;
      return doc;
    })
  );
};
