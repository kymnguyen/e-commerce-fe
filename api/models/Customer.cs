public class Customer: BaseEntity
{
    public override int Id { get; set; }
    public string? FullName { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Email { get; set; }
    public ICollection<Order>? Orders { get; set; }
}