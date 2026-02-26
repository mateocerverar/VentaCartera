import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'analyst/credit-upload', pathMatch: 'full' },
    {
        path: 'analyst',
        children: [
            { path: 'credit-upload', loadComponent: () => import('./features/analyst/credit-upload/credit-upload').then(c => c.CreditUploadComponent) },
            { path: 'sales-history', loadComponent: () => import('./features/analyst/sales-history/sales-history').then(c => c.SalesHistoryComponent) },
            { path: 'discarded-credits', loadComponent: () => import('./features/analyst/discarded-credits/discarded-credits').then(c => c.DiscardedCreditsComponent) }
        ]
    },
    {
        path: 'investor',
        children: [
            { path: 'purchase-selection', loadComponent: () => import('./features/investor/purchase-selection/purchase-selection').then(c => c.PurchaseSelectionComponent) },
            { path: 'purchased-portfolio', loadComponent: () => import('./features/investor/purchased-portfolio/purchased-portfolio').then(c => c.PurchasedPortfolioComponent) }
        ]
    }
];
