import { render, screen } from '@testing-library/react'
import Table from './Table'


describe('Table', () => {
  it('should render table with correct columns and data', () => {
    const columns = [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
    ];

    const data = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
    ];

    const { getByText, getAllByRole } = render(<Table columns={columns} data={data} />);

    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('25')).toBeInTheDocument();
    expect(getByText('Jane')).toBeInTheDocument();
    expect(getByText('30')).toBeInTheDocument();
    expect(getByText('Página 1 de 1')).toBeInTheDocument();

    const rows = getAllByRole('row');

    expect(rows).toHaveLength(3); // 1 header row + 2 data rows
  });

  it('should render empty table when data array is empty', () => {
    const columns = [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
    ];

    const data: any = [];

    const { getByText, queryAllByRole } = render(<Table columns={columns} data={data} />);

    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();

    const tableRows = queryAllByRole('row');

    expect(tableRows).toHaveLength(1); // Only header row
    expect(getByText('Página 1 de 0')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toBeDisabled(); // Previous button
    expect(buttons[1]).toBeDisabled(); // Next button
  });
});
