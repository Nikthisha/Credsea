import Application from '../models/Application';

export const calculateStats = async () => {
  const applications = await Application.find();
  const total = applications.length;
  const totalLoanAmount = applications.reduce((sum, app) => sum + app.loanAmount, 0);
  const avgLoan = total ? totalLoanAmount / total : 0;
  const approved = applications.filter(app => app.status === 'approved').length;
  const successRate = total ? (approved / total) * 100 : 0;

  return {
    totalApplications: total,
    averageLoanAmount: avgLoan.toFixed(2),
    successRate: successRate.toFixed(2) + '%',
  };
};
