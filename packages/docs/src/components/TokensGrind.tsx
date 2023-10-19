interface TokensGrindProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGrindProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <th>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{Number(value.replace("rem", "")) * 16}px</td>}
            </th>
          );
        })}
      </tbody>
    </table>
  );
}
